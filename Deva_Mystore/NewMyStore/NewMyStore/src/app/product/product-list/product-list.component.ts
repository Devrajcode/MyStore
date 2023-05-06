import { Component } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from '../../myservices/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent 
{
  cssStyle={
    'color':'red',
    'font-size': '22px',
    'border-bottom': "2px double green"
  }

  cssClass={
    'img-size': true
  }

  cssPrice={
    'text-info': false,
    'fs-2 text': true
  }



  show(rating: number){
    console.log(rating)
  }

  // productlist!: Product[]
  productlist: Product[] = []

  constructor(private pService: ProductService){
    pService.getProductList().subscribe({
      next:value=>this.productlist = value
    })
  }

  onAddToCart(){
    this.pService.increaseCartCounter()
  }

  onDelete(id:number){
    this.pService.deleteProduct(id).subscribe({
      next:value=>{
        console.log("It is deleted successfully....!")
        this.pService.getProductList().subscribe({
          next:value=>this.productlist = value 
        })
      },
      error:e=>alert("Error occcured"+e)
    })
  }

}
