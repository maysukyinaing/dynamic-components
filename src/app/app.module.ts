import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FbCardComponent } from './components/fb-card/fb-card.component';
import { SocialCardComponent } from './components/social-card/social-card.component';
import { TwitterCardComponent } from './components/twitter-card/twitter-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FbCardComponent,
    SocialCardComponent,
    TwitterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
