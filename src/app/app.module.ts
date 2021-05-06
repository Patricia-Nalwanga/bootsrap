import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { RouterModule} from "@angular/router";

import { LandingPageComponent } from "./landing-page/landing-page.component";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent, 
    LandingPageComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
