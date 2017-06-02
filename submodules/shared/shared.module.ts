import { NgModule } from '@angular/core';
import { SimpleExamplePipe } from 'submodules/shared/pipes/simple-example.pipe';

@NgModule({
  declarations: [
    SimpleExamplePipe
  ],
  exports: [
    SimpleExamplePipe
  ]
})
export class SharedAngularComponentsModule { }
