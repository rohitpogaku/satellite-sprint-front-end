import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-satellite-card',
  templateUrl: './satellite-card.component.html',
  styleUrls: ['./satellite-card.component.css']
})
export class SatelliteCardComponent {
  @Input() satellite: any;
}
