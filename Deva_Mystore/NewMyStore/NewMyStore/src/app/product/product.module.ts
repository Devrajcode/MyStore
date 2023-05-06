import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from './mypipes/discount.pipe';
import { StarComponent } from './star/star.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductReviewFormComponent } from './product-review-form/product-review-form.component';
import { SharedModule } from '../shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductListComponent,
    DiscountPipe,
    StarComponent,
    ProductDetailsComponent,
    ProductReviewFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
