import * as firebase from 'firebase';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Customer } from 'src/Shared/customer.model';

@Injectable()
export class authService {

    constructor(private http: Http){
    }

    customers : Customer[] = [
        new Customer('Alirez','Ebrahimkhani','Alireza','1234',[],[],false)
    ];

    onRegister(cust : Customer){
        console.log(cust.email);
        firebase.auth().createUserWithEmailAndPassword(cust.email , cust.password)
            .catch(
                error => console.log(error)
            )
    }
}