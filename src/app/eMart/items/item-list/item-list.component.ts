import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../Item';
import { EmartService } from 'src/app/e-mart.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  allItems:Item[];
  constructor(protected router:Router,protected EmartService: EmartService) 
  {
   /* this.allItems=[{
      id: 201,
      name: 'LG LED',
      categoryId:501,
      subCategoryId:101,
      price:50000,
      description:'',
      stock: 5,
      remarks:'good product',
      img: "https://images.unsplash.com/photo-1539786774582-0707555f1f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
  },
  {
    id: 202,
    name: 'Samsung TV',
    categoryId:502,
    subCategoryId:101,
    price:60000,
    description:'',
    stock: 5,
    remarks:'good product',
    img: "https://images.unsplash.com/photo-1542487354-feaf93476caa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
 },
  {
      id: 203,
      name: 'sony HeadPhones',
      categoryId:501,
      subCategoryId:102,
      price:2000,
      description:'',
      stock: 5,
      remarks:'good product',
      img: "https://images.unsplash.com/photo-1563626451-b5b36e6e52fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
   },
   {
    id: 204,
    name: 'MI HeadPhones',
    categoryId:501,
    subCategoryId:102,
    price:449,
    description:'',
    stock: 5,
    remarks:'good product',
    img: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
   {
    
      id: 205,
      name: 'MI K20pro',
      categoryId:502,
      subCategoryId:103,
      price:28000,
      description:'',
      stock: 5,
      remarks:'good product',
      img: "https://unsplash.com/photos/lMagjRuDxNQ"
   
   },
   {
    
    id: 206,
    name: 'MI Note 8 pro',
    categoryId:502,
    subCategoryId:103,
    price:16000,
    description:'',
    stock: 5,
    remarks:'good product',
    img: "https://unsplash.com/photos/QJykaAsWhco"
 
 },
   {
      id: 207,
      name: 'Samsung Galaxy M30',
      categoryId:502,
      subCategoryId:104,
      price:14000,
      description:'',
      stock: 5,
      remarks:'good product',
      img: "https://unsplash.com/photos/1mdV8fuUzZs"
  },
  {
    id: 208,
    name: 'Samsung J7',
    categoryId:502,
    subCategoryId:104,
    price:15000,
    description:'',
    stock: 5,
    remarks:'good product',
    img: "https://unsplash.com/photos/VD9Hsvg3DVQ"
},
  {
      id: 209,
      name: 'floral',
      categoryId:503,
      subCategoryId:104,
      price:694,
      description:'',
      stock: 5,
      remarks:'good product',
      img: "https://unsplash.com/s/photos/floral-tops"
  },
  {
    id: 210,
    name: 'Cold Shoulder',
    categoryId:503,
    subCategoryId:104,
    price:694,
    description:'',
    stock: 5,
    remarks:'good product',
    img: "https://img.faballey.com/Images/Product/TOP02657A/3.jpg"
},
  {
      id: 211,
      name: 'Denim',
      categoryId:503,
      subCategoryId:105,
      price:2000,
      description:'',
      stock: 5,
      remarks:'good product',
      img: "https://images.unsplash.com/photo-1578825142195-17697a8c41dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
 },
 {
      id: 212,
      name: 'Levis',
      categoryId:503,
      subCategoryId:105,
      price:2000,
      description:'',
      stock: 5,
      remarks:'good product',
      img: "https://unsplash.com/photos/Q95GqQQjhxk"
  }
   ]*/
  }
  


  ngOnInit(): void
   {
    this.allItems=this.EmartService.getAllItems();
  }
  displayItem(id:number)
  {
    this.router.navigate(['item-display/'+id]);
  }
}

