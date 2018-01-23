import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DynamicTemplateComponent } from './dynamic-template.component';

const routes: Routes = [
  { path: '', redirectTo: '/dynamic-template', pathMatch: 'full' },
  { path: 'dynamic-template', component: DynamicTemplateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicTemplateRoutingModule {}
