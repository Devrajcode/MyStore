import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  exports:[
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,  //[FormControl, FormGroup(fix set of controls), FormArray(flexible set of control)]
  ]
})
export class SharedModule { }
