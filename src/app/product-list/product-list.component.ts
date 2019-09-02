import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Shared/products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] = [
    new Product('nikon' , 'assets/camera1.jpeg' , 'The best one  yet' ,['Good camera' , 'you have to provide a lenz'] , 5000000 , 0),
    new Product('sony' , 'assets/camera2.jpeg' , 'Medium' , ['it was not bad' , 'like it' , 'sony is a good brand'] , 2900000 , 1),
    new Product('samsung' , 'assets/camera3.jpeg' , 'for Fun' , ['dont buy it' , 'Fragile'] , 1800000 , 2)
  ];


  constructor() { }

  ngOnInit() {
  }

}
