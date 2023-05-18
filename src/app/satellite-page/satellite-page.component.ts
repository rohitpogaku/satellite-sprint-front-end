import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SatelliteService} from "../satellite.service";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-satellite-page',
  templateUrl: './satellite-page.component.html',
  styleUrls: ['./satellite-page.component.css']
})
export class SatellitePageComponent implements OnInit {
  satellite: any | undefined;
  imageUrl: SafeUrl | undefined;

  constructor(private route: ActivatedRoute, private satelliteService: SatelliteService, private sanitizer: DomSanitizer) {
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
      this.getImage(this.satellite.satelliteId);
    })
  }

  getImage(id: any) {
    this.satelliteService.getImage(id).subscribe((e: any) => {
      let objectURL = URL.createObjectURL(e);
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    })
  }

}
