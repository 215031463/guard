import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <div class="page">
      <h2>温馨提示</h2>
      <p>抱歉没有找到相关页面，<a (click)="goBackHome()" href="javascript:void(0)">返回主页</a></p>
    </div>
  `,
  styles: []
})
export class Page404Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBackHome(): void {
    this.router.navigateByUrl('/home');
  }

}
