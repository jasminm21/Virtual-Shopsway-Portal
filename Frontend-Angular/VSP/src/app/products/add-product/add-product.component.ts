import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product';
import { ProductService } from 'src/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  constructor(private _productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

   products:Product[];

  onAddProduct(form){
     this._productService.addProduct(form).subscribe(data=>{
       console.log("added successfully")
       this._productService.getAllProducts().subscribe(data=>{
          this.products=data;
          this.router.navigate(['products']);
       })
     });
  }
}
