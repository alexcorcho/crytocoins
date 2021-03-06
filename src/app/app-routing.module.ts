import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { DetailCoinComponent } from './modules/detail-coin/detail-coin.component';
import { ListCoinComponent } from './modules/list-coin/list-coin.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'listcoin',component:ListCoinComponent},
  {path:'detailcoin/:id',component:DetailCoinComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
