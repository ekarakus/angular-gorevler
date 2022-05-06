import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IsComponent } from './components/is/is.component';
import { IslerComponent } from './components/isler/isler.component';

@NgModule({
  declarations: [
    AppComponent,
    IslerComponent,
    IsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
