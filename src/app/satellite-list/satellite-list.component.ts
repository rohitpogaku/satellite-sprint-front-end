import {Component, OnInit} from '@angular/core';
import {SatelliteService} from "../satellite.service";

@Component({
  selector: 'app-satellite-list',
  templateUrl: './satellite-list.component.html',
  styleUrls: ['./satellite-list.component.css']
})
export class SatelliteListComponent implements OnInit {
  satellites: any;
  showList: boolean | undefined;
  showGrid: boolean | undefined;

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
  }

  getAllSatellites() {
    return this.satelliteService
      .getAllSatellites()
      .subscribe((e: any) => {
        this.satellites = e;
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

}
