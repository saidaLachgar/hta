import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { departmentRoutingModule } from './department-routing.module';
import { LightboxModule } from 'ngx-lightbox';

import { SharedModule } from 'src/app/shared/shared.module';
import { departmentCreateComponent } from './department-create/department-create.component';
import { departmentDetailsComponent } from './department-details/department-details.component';
import { departmentUpdateComponent } from './department-update/department-update.component';
import { departmentsListComponent } from './departments-list/departments-list.component';

@NgModule({
  imports: [
    departmentRoutingModule,
    SharedModule,
    LightboxModule
  ],
  declarations: [
    departmentsListComponent,
    departmentCreateComponent,
    departmentUpdateComponent,
    departmentDetailsComponent,
  ],
})
export class departmentModule { }
