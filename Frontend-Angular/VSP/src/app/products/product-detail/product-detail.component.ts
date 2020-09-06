import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/model/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id:number;
  product: Product;
  constructor(private route: ActivatedRoute, private _productService:ProductService) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params.productId;
    // this.id= +this.route.snapshot.paramMap.get('productId');  // here + symbol to convert string to numeric
    // console.log("id : "+this.id);
    // this._productService.getProductById(this.id).subscribe(data=>{
    //     this.product=data;
    // })
  }

}
