import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class CustomerService{

    constructor(private http : Http){}

    custArray = [];

    onChangeStatus(email : string){
        this.http.get('https://digiproproject.firebaseio.com/data.json').subscribe(
            (response) => this.custArray = response.json()
        )

        for(let i; i<this.custArray.length; i++){
            console.log('slm');
            
            // this.custArray[i]

        }
        
    }
}