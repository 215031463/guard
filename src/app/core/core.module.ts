import { NgModule, SkipSelf, Optional } from '@angular/core';

import 'rxjs/add/observable/of';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: []
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('core module should been imported only once');
    }
  }
}
