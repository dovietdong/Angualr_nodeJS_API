import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { empty } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  cats: any
  status: any
  list: any

  //khai báo sử dụng form, khai báo các giá trị sử dụng trong form
  proForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    status: new FormControl(1),
    price : new FormControl(),
    category_id : new FormControl()
  });

  constructor(private proService: ProductService, private cateService: CategoryService) { }

  ngOnInit(): void {
    this.cateService.getList().subscribe((res: any) => {
      this.cats = res.result
    })
   
  }

  onSubmit() {
    console.log(this.proForm.value)
    this.proService.add(this.proForm.value).subscribe((res: any) => {
      // this.getList();
      console.log(res)
      alert("Thêm mới thành công")
    })
  }

}
