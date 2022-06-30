import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { ListCoinComponent } from './modules/list-coin/list-coin.component';
import { DetailCoinComponent } from './modules/detail-coin/detail-coin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListCoinComponent,
    DetailCoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
