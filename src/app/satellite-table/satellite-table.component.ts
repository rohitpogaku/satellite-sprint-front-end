import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import Satellite from "../shared/satellite";
import {SatelliteService} from "../satellite.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-satellite-table',
  templateUrl: './satellite-table.component.html',
  styleUrls: ['./satellite-table.component.css']
})
export class SatelliteTableComponent {
  @Input() satellites: Satellite[] = [];
  @Output() rowDeleted: EventEmitter<void> = new EventEmitter<void>();

  satelliteNameToBeDeleted = {
    satelliteId: undefined,
    satelliteName: ""
  };

  constructor(private router: Router, private satelliteService: SatelliteService, private messageService: MessageService) {
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
    this.satelliteNameToBeDeleted.satelliteId = satelliteToDelete.satelliteId;
    this.satelliteNameToBeDeleted.satelliteName = satelliteToDelete.satelliteName;
  }

  setSatelliteToBeEdited(satelliteId: number) {
    this.router.navigateByUrl(`satellites/${satelliteId}/edit`);
  }

  deleteSatellite(satellite: any) {
    this.satelliteService.deleteSatellite(+satellite.satelliteId).subscribe((e) => {
      this.messageService.add({
        severity: 'success',
        summary: `${satellite.satelliteName} deleted successfully!`
      });
      this.rowDeleted.emit();
    })


  }


}
