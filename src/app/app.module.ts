import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonLinkComponent } from './button-link/button-link.component';
import { MButtonComponent } from './m-button/m-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonLinkComponent,
    MButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
