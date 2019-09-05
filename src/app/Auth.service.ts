import * as firebase from 'firebase';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Customer } from 'src/Shared/customer.model';
import { CustomerService } from './customer.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class authService {
    Error: string;
    isSignin = false;

    constructor(private http: Http, private custService: CustomerService, private snackbar: MatSnackBar) {
    }

    customers: Customer[] = [
        new Customer('Alirez', 'Ebrahimkhani', 'Alireza', '1234', [], [], false)
    ];

    onRegister(cust: any[], customer: Customer) {
        console.log(customer.email);
        firebase.auth().createUserWithEmailAndPassword(customer.email, customer.password)
            .catch(
                error => {
                    this.snackbar.open(error.message)
                    console.log(error)
                    this.Error = error.message

                }
            )

        if (this.Error !== 'The email address is already in use by another account.') {
            return this.http.post('https://digiproproject.firebaseio.com/data.json', cust);
        } else {
            console.log('Pashmak');
        }



    }

    Login(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response => console.log(response)
        ).catch(
            error => {
                this.snackbar.open(error.message)
                console.log(error)
                this.Error = error.message
            }
        );
        if (this.Error !== 'The password is invalid or the user does not have a password.') {
            this.isSignin = true;
        } else {
            this.isSignin = false;
        }
    }

    logOut() {
        firebase.auth().signOut();
        this.isSignin = false;
    }
}