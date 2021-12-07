import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule { }
