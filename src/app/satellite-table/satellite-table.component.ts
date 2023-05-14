import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import Satellite from "../shared/satellite";
import {SatelliteService} from "../satellite.service";

@Component({
  selector: 'app-satellite-table',
  templateUrl: './satellite-table.component.html',
  styleUrls: ['./satellite-table.component.css']
})
export class SatelliteTableComponent {
  @Input() satellites: Satellite[] = [];

  satelliteNameToBeDeleted = {
    satelliteId: undefined,
    satelliteName: ""
  };


  constructor(private router: Router, private satelliteService: SatelliteService) {
  }

  handleRowClick(event: any) {
    const clickedElement = event.target;
    const isLastColumn = clickedElement.cellIndex ? clickedElement.cellIndex === event.currentTarget.cells.length - 1 : true;
    if (!isLastColumn) {
      let id = event.currentTarget.cells[0].textContent.trim();
      this.router.navigateByUrl(`/satellites/${id}`);
    }
  }

  setSatelliteToBeDeleted(satelliteToDelete: any) {
    this.satelliteNameToBeDeleted.satelliteId = satelliteToDelete.sateliteId;
    this.satelliteNameToBeDeleted.satelliteName = satelliteToDelete.satelliteName;
  }

  setSatelliteToBeEdited(satelliteId: number) {
    this.router.navigateByUrl(`satellites/${satelliteId}/edit`);
  }

  deleteSatellite(satelliteId: any) {
  }
}
