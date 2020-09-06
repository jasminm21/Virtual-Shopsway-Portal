import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductsComponent } from './product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductService } from 'src/services/product.service';
import { FilterPipe } from '../filter.pipe';
import { ProductDetailGuard} from './product-detail.guard';
import { StarComponent } from '../shared/star.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    AddProductComponent, 
    FilterPipe,
    UpdateProductComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // SharedModule,
    RouterModule.forChild([
      {path:'products', component: ProductsComponent},
      {path:'addproduct', component: AddProductComponent},
      {path:'pdetails/:productId',
      canActivate: [ProductDetailGuard],
      component: ProductDetailComponent},
      {path:'updateproduct/:productId', component: UpdateProductComponent}
    ]),
  ],
  providers: [
    ProductService,
    ProductDetailGuard
  ],
})
export class ProductModule { }
