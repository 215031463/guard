import { NgModule } from '@angular/core';

import { AdService } from './ad.service';
import { AdBannerComponent } from './ad-banner.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { DynamicTemplateComponent } from './dynamic-template.component';

@NgModule({
  declarations: [
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    DynamicTemplateComponent
  ],
  imports: [],
  exports: [],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  providers: [AdService],
})
export class DynamicTemplateModule {}
