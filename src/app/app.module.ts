import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoundPlaceComponent } from './sound-place/sound-place.component';
import { ScopeComponent } from './scope/scope.component';

@NgModule({
  declarations: [
    AppComponent,
    SoundPlaceComponent,
    ScopeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
