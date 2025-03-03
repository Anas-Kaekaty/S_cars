import { HaederComponent } from './haeder/haeder.component';
import { AppComponent } from '././app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LandingComponent } from './landing/landing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  bootstrap:[AppComponent],
  declarations: [
    AppComponent,
    HaederComponent,
    LandingComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,

  ]
})
export class AppModule { }
