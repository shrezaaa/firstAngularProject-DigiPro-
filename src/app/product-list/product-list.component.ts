import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Shared/products.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  myForm: FormControl;

  products : Product[] = [
    new Product('iphone XS' , 'assets/4560689.jpg' , ' خنده من از گریه غم انگیز تر است' , ['dont buy it' , 'Fragile'] , '🤣🤣' , 6),
    new Product('Nokia' , 'assets/1044300.jpg' , '' , ['dont buy it' , 'Fragile'] , '👌👍' , 8),
    new Product('nikon' , 'assets/camera1.jpeg' , '' ,['Good camera' , 'you have to provide a lenz'] , 5000000 , 0),
    new Product('sony' , 'assets/camera2.jpeg' , '' , ['it was not bad' , 'like it' , 'sony is a good brand'] , 2900000 , 1),
    new Product('samsung' , 'assets/camera3.jpeg' , '' , ['dont buy it' , 'Fragile'] , 1800000 , 2),
    new Product('Canon 4000d' , 'assets/3532470.jpg' , '' , ['dont buy it' , 'Fragile'] , 2800000 , 3),
    new Product('Nikon D5300' , 'assets/266661.jpg' , '' , ['dont buy it' , 'Fragile'] , 6800000 , 4),
    new Product('samsung A50' , 'assets/111460776.jpg' , '' , ['dont buy it' , 'Fragile'] , 800000 , 5),
    

  ];


  constructor() { }

  ngOnInit() {
  }

}
