import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="page">
      <h2>温馨提示</h2>
      <p>抱歉，您暂时没有权限访问该页面，如需访问，请联系系统管理员...<a routerLink="/home">返回主页</a></p>
    </div>
  `,
  styles: []
})
export class AuthErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
