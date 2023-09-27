import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  activeItem: string = 'Categorías';

  setActiveItem(item: string) {
    this.activeItem = item;
  }

}
