import { NgModule } from '@angular/core';
import { UiSwitchModule } from 'ngx-ui-switch';
import { relatedAnomaliesComponent } from './related-anomalies.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [relatedAnomaliesComponent],
  imports: [
    SharedModule, RouterModule,
    UiSwitchModule.forRoot({
      size: 'small',
    }),
  ],
  exports: [relatedAnomaliesComponent],
})
export class relatedAnomaliesModule {}