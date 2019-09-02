import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Customer } from 'src/Shared/customer.model';

@Injectable()
export class ServerService {

    constructor(private http: Http){
    }

    customers : Customer[] = [
        new Customer('Alirez','Ebrahimkhani','Alireza','1234',[],[],false)
    ];

    onRegister(cust : Customer){
        this.customers.push(cust);
    }
}