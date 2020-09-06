import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Product } from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl:string='http://localhost:8080/product-service/products';

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any>{

    return this.http.get(this.baseUrl);
  }

  getProductById(productId):Observable<any>{
    return this.http.get(this.baseUrl+'/'+productId);
  }

  deleteProduct(productId){
    return this.http.delete(this.baseUrl+'/'+productId);
  }

  addProduct(product){
    return this.http.post(this.baseUrl,product);
  }

  updateProduct(productId,product){
    return this.http.put(this.baseUrl+'/'+productId,product);
  }
}
