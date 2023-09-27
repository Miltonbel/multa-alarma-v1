import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { CategoryModule } from '../category/category.module';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatIconRegistry} from '@angular/material/icon';


@NgModule({
  declarations: [CoreComponent, HeaderComponent, SideBarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    AppRoutingModule,
    CategoryModule,
    HttpClientModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

    ICONS_CONFIG.forEach(icon => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
export const ICONS_CONFIG = [
  {
    name: 'custom-time',
    path: 'assets/icons/time.svg',
  },
  {
    name: 'custom-category',
    path: 'assets/icons/category.svg',
  },
  {
    name: 'custom-signout',
    path: 'assets/icons/signout.svg',
  },

];
