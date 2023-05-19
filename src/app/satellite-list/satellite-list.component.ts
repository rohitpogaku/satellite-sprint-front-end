import {Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {SatelliteService} from "../satellite.service";
import Satellite from "../shared/satellite";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-satellite-list',
  templateUrl: './satellite-list.component.html',
  styleUrls: ['./satellite-list.component.css']
})
export class SatelliteListComponent implements OnInit {
  satellites: Satellite[] = [];
  filteredSatellites: Satellite[] = [];
  isFilteredListLoading = true;

  // variable for toggling view of satellite page between list and cards
  showList: boolean | undefined;
  showGrid: boolean | undefined;

  // variables to populate filter options from backend
  orbits: any;
  applications: any;
  manufacturers: any;
  agencies: any;

  // variable to store selected checkbox values
  orbitFormValues: any = {};
  manufacturerFormValues: any = {};
  agencyFormValues: any = {};

  // variable to manually close filter button dropdown
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;

  private _filterBy: string = "";

  get filterBy(): string {
    return this._filterBy;
  }

  set filterBy(value: string) {
    this._filterBy = value;
    if (value) {
      this.filterBasedOnSearch(value);
    } else {
      this.filteredSatellites = this.satellites;
    }
    sessionStorage.setItem("filterBy", value);
  }

  constructor(private satelliteService: SatelliteService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem("showList")) {
      this.showList = localStorage.getItem("showList") === "true";
      this.showGrid = !this.showList;
    } else {
      this.showList = false;
      this.showGrid = true;
      localStorage.setItem("showList", String(this.showList));
    }

    this.getAllSatellites();
    this.getAllOrbits();
    this.getAllApplications();
    this.getAllManufacturers();
    this.getAllAgencies();
  }


  getAllSatellites() {
    return this.satelliteService
      .getAllSatellites()
      .subscribe({
        next: satellites => {
          this.satellites = satellites;


          const dataFromService: Satellite[] = this.satelliteService.getSatelliteCache();
          if (dataFromService.length) {
            this.filteredSatellites = dataFromService;
          } else if (sessionStorage.getItem("filterBy")) {
            this.filterBy = String(sessionStorage.getItem("filterBy"));
            this.filterBasedOnSearch(this.filterBy);
          } else {
            this.filteredSatellites = this.satellites;
          }

          this.isFilteredListLoading = false;
        }
      })
  }

  toggleShowList() {
    this.showList = !this.showList;
    this.showGrid = !this.showGrid;
    localStorage.setItem("showList", String(this.showList))
  }

  toggleShowGrid() {
    this.showGrid = !this.showGrid;
    this.showList = !this.showList;
    localStorage.setItem("showList", String(this.showList))
  }

  getAllOrbits() {
    this.satelliteService.getAllOrbits().subscribe((e: any) => {
      this.orbits = e;
    })
  }

  getAllApplications() {
    this.satelliteService.getAllApplications().subscribe((e: any) => {
      this.applications = e;
    })
  }

  getAllManufacturers() {
    this.satelliteService.getAllManufacturers().subscribe((e: any) => {
      this.manufacturers = e;
    })
  }

  getAllAgencies() {
    this.satelliteService.getAllAgencies().subscribe((e: any) => {
      this.agencies = e;
    })
  }

  filterBasedOnSearch(value: string) {
    this.filteredSatellites = this.satellites.filter((satellite: Satellite) => {
      return satellite.satellite_name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    });
  }

  filterBasedOnApplication(application: string) {
    if (!application) {
      this.filterBasedOnSearch(this.filterBy);
    } else {
      this.filterBasedOnSearch(this.filterBy)
      this.filteredSatellites = this.filteredSatellites.filter((satellite: Satellite) => {
        return satellite.application.includes(application);
      });
    }
  }

  filterInputData() {
    const orbitFormValueArray = Object.keys(this.orbitFormValues).filter((o: string) => this.orbitFormValues[o]);
    const manufacturerFormValuesArray = Object.keys(this.manufacturerFormValues).filter((m: string) => this.manufacturerFormValues[m]);
    const agencyFormValuesArray = Object.keys(this.agencyFormValues).filter((a: string) => this.agencyFormValues[a]);

    this.filterBy = "";
    this.filteredSatellites = this.satellites;

    if (orbitFormValueArray.length) {
      this.filteredSatellites = this.filteredSatellites.filter(s => {
        return orbitFormValueArray.indexOf(s.orbit_type) !== -1;
      });
    }
    if (manufacturerFormValuesArray.length) {
      this.filteredSatellites = this.filteredSatellites.filter(s => {
        return manufacturerFormValuesArray.indexOf(s.manufacturer) !== -1;
      });
    }
    if (agencyFormValuesArray.length) {
      this.filteredSatellites = this.filteredSatellites.filter(s => {
        return agencyFormValuesArray.indexOf(s.agency) !== -1;
      });
    }

    this.satelliteService.saveSatelliteCache(this.filteredSatellites);
    this.dropdownMenu.nativeElement.classList.remove('show');
  }

  filterClearAll() {
    this.orbitFormValues = {};
    this.manufacturerFormValues = {};
    this.agencyFormValues = {};

    this.filteredSatellites = this.satellites;

    sessionStorage.removeItem("orbitFormValues")
    sessionStorage.removeItem("manufacturerFormValues")
    sessionStorage.removeItem("agencyFormValues")
    this.satelliteService.saveSatelliteCache(this.filteredSatellites);
    this.dropdownMenu.nativeElement.classList.remove('show');
  }


}
