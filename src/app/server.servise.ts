import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Customer } from 'src/Shared/customer.model';

@Injectable()
export class ServerService {

    constructor(private http: Http , private cust : Customer){
    }

    onRegister(cust : Customer){
        this.http.post('https://digiproproject.firebaseio.com/data.json',cust);
    }
 
}