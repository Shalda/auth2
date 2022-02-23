import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AzureModule} from "ngx-bstal13";
import {environment} from '../environments/environment'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AzureModule.forRoot(environment.azureADConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
