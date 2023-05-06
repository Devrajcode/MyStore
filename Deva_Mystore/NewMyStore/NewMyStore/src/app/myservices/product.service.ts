import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductReview } from '../product/product-review-form/product-review.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  myname: string = "Devaraja s"
  apiURL : string = "http://localhost:4200/assets/productlist.json"
  apiReviewURL:string = "http://localhost:3000/productreviews"

  cartCounter: number = 0
  // here it is a observable which maintain the value cartcounter
  cartCounter$ = new BehaviorSubject<number>(this.cartCounter)



  // constructor() {
  //   console.log("Services created........!")
  // }

  increaseCartCounter(){
    this.cartCounter++
    this.cartCounter$.next(this.cartCounter)
    console.log(this.cartCounter)
  }

  getCartCounter():Observable<number>
  {
    return this.cartCounter$
  }

  getProductList(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL)
    
  }

  deleteProduct(id:number){
    return this.http.delete(`${this.apiURL}/${id}`)
    
  }

  getProductById(id:number){
    return this.http.get<Product>(`${this.apiURL}/${id}`)
  }

  constructor(private http:HttpClient)
  {
    console.log("Service created.....!")
  }

  addReview(productReview:ProductReview){
    return this.http.post<ProductReview>(this.apiReviewURL, productReview)
  }



}
