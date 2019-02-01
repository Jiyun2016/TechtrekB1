import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService } from '../customer.service'
import { Customer } from '../customer'


@Component({
  selector: 'app-transaction-home',
  templateUrl: './transaction-home.component.html',
  styleUrls: ['./transaction-home.component.css']
})
export class TransactionHomeComponent implements OnInit {
	msgs: any[] = [];

	customer: Customer;
	customerId: number;
    gender: string;
    firstName: string;
    lastName: string;
    lastLogIn: string;
    dateOfBirth: string


  	constructor(private router: Router,
			  private customerService: CustomerService) { }

  	ngOnInit() {

			
		this.customerService.getCustomerDetails(1).subscribe(
				response => {
					this.customerId = response.customerId
    				this.gender= response.gender
    				this.firstName= response.firstName
    				this.lastName= response.lastName
    				this.lastLogIn= response.lastLogIn
    				this.dateOfBirth= response.dateOfBirth 
				
				},
				error => {				
					this.msgs.push({severity:"error", summary:"HTTP " + error.status, detail:error.error.message});
					console.log(this.msgs[0]);
				}
			);

			console.log("getCustomerDetails called");

  	}

}

