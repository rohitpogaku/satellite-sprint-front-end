import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {SatelliteService} from "../satellite.service";

@Component({
  selector: 'app-satellite-card',
  templateUrl: './satellite-card.component.html',
  styleUrls: ['./satellite-card.component.css']
})
export class SatelliteCardComponent implements OnInit {
  @Input() satellite: any;
  imageUrl: SafeUrl | undefined;

  constructor(private satelliteService: SatelliteService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.getImage(this.satellite.satellite_id);
  }


  getImage(id: any) {
    this.satelliteService.getImage(id).subscribe((e: any) => {
      let objectURL = URL.createObjectURL(e);
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    })
  }
}
