import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/model/product';

@Component({
  selector: 'pm-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  
  id:number;
  product={
    productId:0,
    productName:'',
    cost:'',
    rating:''
  };

  constructor(private route:ActivatedRoute,
     private _productService:ProductService,
     private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.productId;
    // console.log(this.id);
    this._productService.getProductById(this.id).subscribe(data=>{
      this.product=data
    })
  }

  updateProduct(form){
    // console.log(form);
      this._productService.updateProduct(this.id,form).subscribe(data=>{
          console.log("product updated successfully");
          this.router.navigate(['products']);
      })
  }
}
