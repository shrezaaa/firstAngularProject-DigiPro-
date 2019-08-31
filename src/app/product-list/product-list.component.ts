import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Shared/products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[] = [
    new Product('nikon' , 'assets/camera1.jpeg' , 'The best one  yet' ,['Good camera' , 'you have to provide a lenz']),
    new Product('sony' , 'assets/camera2.jpeg' , 'Medium' , ['it was not bad' , 'like it' , 'sony is a good brand']),
    new Product('zenit' , 'assets/camera3.jpeg' , 'for Fun' , ['dont buy it' , 'Fragile'])
  ];


  constructor() { }

  ngOnInit() {
  }

}
