import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TransactionHomeComponent } from './transaction-home/transaction-home.component';


const routes: Routes = [
	{ path: '', redirectTo: '/transactionhome', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
  { path: 'transactionhome', component: TransactionHomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports:[
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
