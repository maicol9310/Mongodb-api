import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router:Router,
              private toastr: ToastrService) {
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

    const PRODUCT: Product = {
      name: this.productForm.get('name')?.value,
      description: this.productForm.get('description')?.value,
      category: this.productForm.get('category')?.value,
      price: this.productForm.get('price')?.value,
      amount: this.productForm.get('amount')?.value,
    }
    console.log(PRODUCT);
    this.toastr.success('Product registered successfully!', 'Registered product');
    this.router.navigate(['/']);
  }

}
