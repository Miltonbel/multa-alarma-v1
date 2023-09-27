import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeListComponent } from './time-list/time-list.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";
import { TimeAddComponent } from './time-add/time-add.component';


@NgModule({
  declarations: [
    TimeListComponent,
    TimeAddComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class TimeModule { }
