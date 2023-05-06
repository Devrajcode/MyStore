import { Component } from "@angular/core";

@Component({
    selector: 'app-title',
    // template: '<h1>This is Title component</h1>',
    // template: "<h1 title='Welcome To Mystore'>{{ title }}</h1>",
    template: '<h1 [title]="msg" (click)="show(123)"><i class="bi bi-shop"></i>{{ title }}</h1>',

    // styles: ["h1{color: red;}"]
    styles: [""]


})
export class TitleComponent
{
    title:string = "My-Store"
    msg:string="Hello....! Welcome to MyStore"
    show(num:number)
    {
        console.log("Number is "+num)
    }

}

/*
here
        @component is built-in Decorator
        which used to declare current class is Component class.

        it is used contain Extra information (i.e., meta-data)
        about a component
        Variable declaration syntax
        variable_name:datatype

*/