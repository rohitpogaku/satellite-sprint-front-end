import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SatelliteService} from "../satellite.service";

@Component({
  selector: 'app-satellite-edit',
  templateUrl: './satellite-edit.component.html',
  styleUrls: ['./satellite-edit.component.css']
})
export class SatelliteEditComponent implements OnInit {

  satelliteToBeEdited: any;
  orbits: any;
  applications: any;
  manufacturers: any;
  agencies: any;

  constructor(private router: Router, private route: ActivatedRoute, private satelliteService: SatelliteService) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.getSatellite(id);
    this.getAllOrbits();
    this.getAllApplications();
    this.getAllManufacturers();
    this.getAllAgencies();
  }

  getSatellite(id: number) {
    this.satelliteService.getSatelliteById(id).subscribe((e: any) => {
      this.satelliteToBeEdited = e;
      console.log(this.satelliteToBeEdited)
    })
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

  submit(satelliteForm: any) {
    console.log(satelliteForm);
  }

}
