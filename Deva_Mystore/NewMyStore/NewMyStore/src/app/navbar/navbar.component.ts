import { Component } from "@angular/core";
import { ProductService } from "../myservices/product.service";
import { Observable } from "rxjs";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls:['./navbar.component.css']
})
export class NavbarComponent
{
    count!: number
    count$!:Observable<number>

    constructor(private pservices: ProductService){
        console.log("Navbar is created.......!")
        console.log(pservices.myname)
        this.count$ = pservices.getCartCounter();
        this.count$.subscribe({
            next:(value:number)=>this.count=value
        })
    }

    // onClick(){
    //     this.count = this.pservices.getCartCounter();
    // }
}