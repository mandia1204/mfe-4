import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { GreetingService } from './services/greeting.service';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  providers: [
    { provide: 'GreetingService', useClass: GreetingService }
  ],
  imports: [
    DxDataGridModule,
    CommonModule,
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
