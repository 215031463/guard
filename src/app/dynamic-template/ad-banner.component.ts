import { Component, Input, ViewChild, ComponentFactoryResolver, AfterViewInit, OnDestroy } from '@angular/core';

import { AdHostDirective } from './ad-host.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad-component';

@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="ad-banner">
      <h3>Advertisements</h3>
      <ng-template appAdHost></ng-template>
    </div>
  `,
  styles: []
})
export class AdBannerComponent implements AfterViewInit, OnDestroy {
  @Input() ads: AdItem[] = [];
  @ViewChild(AdHostDirective) host: AdHostDirective;

  private currentItemIndex: number = -1;
  private timer = null;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loadComponent();
      this.getAds();
    });
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  loadComponent(): void {
    this.currentItemIndex = (this.currentItemIndex + 1) % this.ads.length;
    const item = this.ads[this.currentItemIndex];
    const viewContainerRef = this.host.viewContainerRef;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = item.data;
  }

  getAds(): void {
    this.timer = setInterval(() => this.loadComponent(), 3000);
  }

}
