import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from '../profile/profile.component';
import { ProfileGuard } from './profile.guard';

@NgModule({
  imports: [HomeRoutingModule],
  declarations: [
    HomeComponent,
    ProfileComponent
  ],
  providers: [ProfileGuard]
})
export class HomeModule { }
