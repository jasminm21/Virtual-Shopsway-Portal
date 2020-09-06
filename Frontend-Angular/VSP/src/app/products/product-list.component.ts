import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/model/product';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductsComponent implements OnInit {

    productTitle: string = "Product List";
    products: Product[];
    filteredProducts:any[];
    showImage: boolean = true;
    searchFilter:string;
    notification:string;
    // btnText:string='Show';

    constructor(private _productService: ProductService,
        private router: Router) { 
            // this.filteredProducts=this.products;
            // this.searchFilter='cart';
        }

    ngOnInit() {
        this.getAllProducts();
    }

    errMessage:string;

    getAllProducts() {
        this._productService.getAllProducts().subscribe({
            next:data => {
            this.products = data;
            },
            error:err=>this.errMessage=err
        });
    }

    deleteProduct(productId) {
        this._productService.deleteProduct(productId).subscribe(data => {
            console.log("deleted succesfully");
            this.getAllProducts();
        });
    }

    updateProduct(productId) {
       this.router.navigate(['updateproduct',productId]);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
        // if( this.showImage)
        // this.btnText='Hide';
        // else
        // this.btnText='Show';
    }

    addProductView(){
        this.router.navigate(['addproduct']);
    }

    // productDetail(productId){
    //     this.router.navigate(['pdetails',productId]);
    // }

    onStarClicked(message):void{
        this.notification=message;
    }
}