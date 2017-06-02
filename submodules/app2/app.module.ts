import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'submodules/app2/app.component';
import { SharedAngularComponentsModule } from 'submodules/shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedAngularComponentsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
