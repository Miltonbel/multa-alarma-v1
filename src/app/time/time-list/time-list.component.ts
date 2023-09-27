import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.scss']
})
export class TimeListComponent implements OnInit {

  dataSource: PeriodicElement[] = [];
  displayedColumns: String[] = [];
  ngOnInit(): void {
    this.displayedColumns = ['position', 'time', 'actions'];
    this.dataSource = ELEMENT_DATA;
  }

  editarTiempo(tiempo: PeriodicElement) {
  }

  eliminarTiempo(tiempo: PeriodicElement) {
  }
}


export interface PeriodicElement {
  time: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, time: '1 mes antes' },
  { position: 2, time: '15 días antes' },
  { position: 3, time: '5 días antes' },
  { position: 4, time: '1 día antes' },
];
