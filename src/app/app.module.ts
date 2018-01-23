import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*********  core module  *********/
import { CoreModule } from './core/core.module';

/*********  auth module  *********/
import { AuthModule } from './auth/auth.module';

/*********  auth module  *********/
import { HomeModule } from './home/home.module';

/*********  routing module  *********/
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    HomeModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
