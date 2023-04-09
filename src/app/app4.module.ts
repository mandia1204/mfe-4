import { NgModule } from '@angular/core';
import { App4Component } from './app4.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { APP4_ROUTES } from './app4.routes';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    App4Component,
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    RouterModule.forChild(APP4_ROUTES)
  ],
  exports: [App4Component]
})
export class App4Module { }
