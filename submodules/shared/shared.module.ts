import { NgModule } from '@angular/core';
import { SimpleExamplePipe } from './pipes';

@NgModule({
  declarations: [
    SimpleExamplePipe
  ],
  exports: [
    SimpleExamplePipe
  ]
})
export class SharedAngularComponentsModule { }
