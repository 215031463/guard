import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h2>主页</h2>
      <div>
        <a routerLink="dynamic-template-demo">动态组件</a>
        <a routerLink="profile">个人信息</a>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
