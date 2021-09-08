import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group(
      {
        name: ['', Validators.required],
        description: ['', Validators.required],
        category: ['', Validators.required],
        price: ['', Validators.required],
        amount: ['', Validators.required],
      }
    )
   }

  ngOnInit(): void {
  }

  AddProduct(){
    console.log(this.productForm)
  }

}
