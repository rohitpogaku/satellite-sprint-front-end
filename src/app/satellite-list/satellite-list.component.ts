import {Component, OnInit} from '@angular/core';
import {SatelliteService} from "../satellite.service";

@Component({
  selector: 'app-satellite-list',
  templateUrl: './satellite-list.component.html',
  styleUrls: ['./satellite-list.component.css']
})
export class SatelliteListComponent implements OnInit {
  satellites: any;

  constructor(private satelliteService: SatelliteService) {
  }

  ngOnInit(): void {
    this.getAllSatellites();

  }

  getAllSatellites() {
    return this.satelliteService
      .getAllSatellites()
      .subscribe((e: any) => {
        this.satellites = e;
        console.log(this.satellites);
      })
  }

}
