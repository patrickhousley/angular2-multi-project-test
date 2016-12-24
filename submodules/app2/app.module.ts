import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedAngularComponentsModule } from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedAngularComponentsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
