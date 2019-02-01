import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


const httpOptions = {
		headers: new HttpHeaders({ 
			'identity': 'B1' , 
			'token': 'e88dbe71-2bc2-4fd0-8ebf-0db3337734fc'
		})
};

@Injectable()
export class CustomerService {

	baseUrl = "/api";


  	constructor(private httpClient: HttpClient) { }


	getCustomerDetails(customerId: number): Observable<any> 
	{
		return this.httpClient.get<any>("https://techtrek-api-gateway.cfapps.io/customers/1/details", httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}

	private handleError(error: HttpErrorResponse)
	{
		if (error.error instanceof ErrorEvent) 
		{		
			console.error('An unknown error has occurred:', error.error.message);
		} 
		else 
		{		
			console.error(" A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`);
		}
		
		return new ErrorObservable(error);
	}



}
