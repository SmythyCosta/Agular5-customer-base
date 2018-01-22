import { Injectable } from "@angular/core";
import { Http } from "@angular/http/src/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ICustomers } from "../interfaces/icustomers";


@Injectable()
export class CustomersService{

    public customersUrl = 'http://128.199.217.114/api/customers';

    constructor(private http: Http){}

    getCustomers(): Observable<ICustomers[]>{
        return this.http.get(this.customersUrl)
            .map(response => response.json()).catch(this.erro);
    }

    erro(error){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
}