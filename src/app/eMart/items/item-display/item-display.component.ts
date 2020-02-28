import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../Item';
import { EmartService } from 'src/app/e-mart.service';
@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {

  item:Item;
  

  constructor( protected activatedRoute: ActivatedRoute, protected emartService: EmartService, protected router:Router)
   { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      
      
      (param)=>
      {
        let id=param.get("id");
        this.item=this.emartService.getItem(param.get("id"));
      });
  }

  addToCart(id :number)
  {
    this.emartService.addToCart(id);
    this.router.navigate(['items/item-list']);
  }
}

