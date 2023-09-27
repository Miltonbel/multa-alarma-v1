import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {



  dataSource: PeriodicElement[] = [];
  displayedColumns: String[] = [];
  ngOnInit(): void {
    this.displayedColumns = ['position', 'name', 'actions'];
    this.dataSource = ELEMENT_DATA;

  }


  editarCategoria(categoria: PeriodicElement) {
  }

  eliminarCategoria(categoria: PeriodicElement) {
  }

}


export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'SOAT' },
  { position: 2, name: 'Tecnicomecanica' },
];
