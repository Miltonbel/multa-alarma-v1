import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import {TimeListComponent} from "./time/time-list/time-list.component";
import {TimeAddComponent} from "./time/time-add/time-add.component";



const routes: Routes = [
  {path: '', component: CategoryListComponent, pathMatch: 'full'},
  {path: 'addCategory', component: CategoryAddComponent, pathMatch: 'full'},
  {path: 'time', component: TimeListComponent, pathMatch: 'full'},
  {path: 'addTime', component: TimeAddComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
