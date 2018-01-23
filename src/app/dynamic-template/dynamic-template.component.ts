import { Component, OnInit } from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-dynamic-template',
  template: `
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `,
  styles: []
})
export class DynamicTemplateComponent implements OnInit {
  public ads: AdItem[] = [];

  constructor(private _adService: AdService) { }

  ngOnInit() {
    this.ads = this._adService.getAds();
  }

}
