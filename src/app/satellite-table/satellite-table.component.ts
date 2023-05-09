import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-satellite-table',
  templateUrl: './satellite-table.component.html',
  styleUrls: ['./satellite-table.component.css']
})
export class SatelliteTableComponent {
  @Input() satellites: any;

  constructor(private router: Router) {
  }

  handleRowClick(event: any) {
    const clickedElement = event.target;
    console.log(event)
    const isLastColumn = clickedElement.cellIndex ? clickedElement.cellIndex === event.currentTarget.cells.length - 1 : true;
    if (!isLastColumn) {
      let id = event.currentTarget.cells[0].textContent.trim();
      this.router.navigateByUrl(`/satellites/${id}`);
    }
  }
}
