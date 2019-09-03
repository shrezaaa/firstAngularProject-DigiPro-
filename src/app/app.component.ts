import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Digi-Pro';


  ngOnInit(){

    firebase.initializeApp({
      apiKey: "AIzaSyAMiTSioCVJdl76YH1NtOP3SLfmrZUsgAE",
      authDomain: "digiproproject.firebaseapp.com"
      // databaseURL: "https://digiproproject.firebaseio.com",
      // projectId: "digiproproject",
      // storageBucket: "digiproproject.appspot.com",
      // messagingSenderId: "39136167730",
      // appId: "1:39136167730:web:16b54a732cd1cad9"
    });
  }


  }


