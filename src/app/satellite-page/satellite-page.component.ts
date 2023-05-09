import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SatelliteService} from "../satellite.service";

@Component({
  selector: 'app-satellite-page',
  templateUrl: './satellite-page.component.html',
  styleUrls: ['./satellite-page.component.css']
})
export class SatellitePageComponent implements OnInit {
  satellite: any | undefined;

  constructor(private route: ActivatedRoute, private satelliteService: SatelliteService) {
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.params["id"])
    setTimeout(() => {
      this.getSatellite(id);
    }, 500);
  }

  getSatellite(id: number) {
    this.satelliteService.getSatelliteById(id).subscribe((e: any) => {
      this.satellite = e;
    })
  }

}
