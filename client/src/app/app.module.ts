import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbNavModule, NgbAccordionModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HotToastModule } from '@ngneat/hot-toast';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { ExtrapagesModule } from './extrapages/extrapages.module';

import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JwtInterceptor } from './core/helpers/jwt.interceptor';
// import { JwtModule } from '@auth0/angular-jwt';

import { AppStoreModule } from './store/entity-store.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutsModule,
    AppRoutingModule,
    ExtrapagesModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbTooltipModule,
    ScrollToModule.forRoot(),
    HotToastModule.forRoot({ theme:'snackbar',position: 'bottom-center',dismissible: true }),
    AppStoreModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: () => {
    //       let user = localStorage.getItem("currentUser");
    //       return user && JSON.parse(user).jwt;
    //     },
    //   },
    // }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: "fr-FR" }
  ],
})
export class AppModule {

}
