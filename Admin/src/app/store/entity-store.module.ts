import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  DefaultDataServiceConfig, EntityCollectionReducerMethodsFactory, EntityDataModule, PersistenceResultHandler
} from "@ngrx/data";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { AdditionalEntityCollectionReducerMethodsFactory } from "./additional-entity-collection-reducer-methods";
import { AdditionalPersistenceResultHandler } from "./additional-persistence-result-handler.service";
import { entityConfig } from "./entity-metadata";

const server = environment.serverURL;

const NGRX_DATA_SERVICE_CONFIGURATION: DefaultDataServiceConfig = {
  root: server + "/api", // default root path to the server's web api
};

const NGRX_STORE_CONFIGURATION = {};

const REGISTERED_EFFECTS = [];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(NGRX_STORE_CONFIGURATION),
    EffectsModule.forRoot(REGISTERED_EFFECTS),
    EntityDataModule.forRoot(entityConfig),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: NGRX_DATA_SERVICE_CONFIGURATION,
    },
    // {
    //   provide: DefaultDataServiceFactory,
    //   useClass: CustomDataServiceFactory,
    // },
    {
      provide: PersistenceResultHandler,
      useClass: AdditionalPersistenceResultHandler,
    },
    {
      provide: EntityCollectionReducerMethodsFactory,
      useClass: AdditionalEntityCollectionReducerMethodsFactory
    }
    // UserDataService,
  ],
})
export class AppStoreModule {
  // constructor(
  //   entityDataService: EntityDataService,
  //   userDataService: UserDataService,
  // ) {
  //   entityDataService.registerService('User', userDataService); // <-- Register custom data service
  // }
}
