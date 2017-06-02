import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from 'submodules/app3/app.module.ngfactory';

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

platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory);
