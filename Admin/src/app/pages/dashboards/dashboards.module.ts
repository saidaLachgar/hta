import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    UIModule,
    DashboardsRoutingModule,
  ]
})
export class DashboardsModule { }
