import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from 'submodules/app2/app.module';

try {
  enableProdMode();
} catch (err) {
  /**
   * We do not care if the call to enableProdMode() failes
   * because we only need one of the calls to enableProdMode()
   * to succeed.
   */
  if (err.message.indexOf('Cannot enable prod mode after platform setup.') === -1)
    console.error(err);
}

platformBrowserDynamic()
  .bootstrapModule(AppModule);
