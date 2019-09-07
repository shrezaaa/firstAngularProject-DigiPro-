import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class CustomerService {

    constructor(private http: Http) { }

    custArray = [];

    onChangeStatus(email: string) {
        this.http.get('https://digiproproject.firebaseio.com/data.json').subscribe(
            (response) => {
                this.custArray = response.json()
                let temp = Object.keys(this.custArray)[0]
                console.log(this.custArray[temp][0].isSignin)
                console.log(this.custArray[temp])
                console.log(this.custArray)
                console.log(temp)
            }
        )

        // for(let i; i<this.custArray.length; i++){
        //     console.log('slm');

        //     // this.custArray[i]

        // }

    }
}