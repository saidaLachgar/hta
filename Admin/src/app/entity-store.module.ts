import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { EntityDataModule, DefaultDataServiceConfig } from "@ngrx/data";
import { environment } from "src/environments/environment";
import { entityMetadata, pluralNames } from "./entity-metadata";
import { UserDataService } from "./admin/users/user-data.service";

const server = environment.serverURL;

const NGRX_DATA_SERVICE_CONFIGURATION = {
  root: server+'/api', // default root path to the server's web api
};

const NGRX_STORE_CONFIGURATION = {};

const REGISTERED_EFFECTS = [];


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(NGRX_STORE_CONFIGURATION),
    EffectsModule.forRoot(REGISTERED_EFFECTS),
    EntityDataModule.forRoot({
      entityMetadata: entityMetadata,
      pluralNames: pluralNames
    })
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: NGRX_DATA_SERVICE_CONFIGURATION
    },
    UserDataService
  ]
})
export class AppStoreModule {
  // constructor(
  //   heroDataService: UserDataService,
  // ) {
  // }
}
