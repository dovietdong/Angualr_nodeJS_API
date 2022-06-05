import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  
  //khai báo sử dụng form, khai báo các giá trị sử dụng trong form
  //tên các giá trị tương ứng với tên các cột trong database
  proForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    status: new FormControl(1),
    price: new FormControl(),
    sale_price : new FormControl(),
    category_id: new FormControl()
  });

  cats: any
  status: any
  list: any
  //tham số trên ỦL được lưu vào id
  id: any = this.activeRoute.snapshot.paramMap.get('id')

  constructor(private proService: ProductService,
    private cateService: CategoryService,
    //lấy tham số trên URL 
    private activeRoute: ActivatedRoute,
    //chuyển hướng (navigate) sang trang khác
    private router : Router
  ) { }

  ngOnInit(): void {
    this.cateService.getList().subscribe((res: any) => {
      this.cats = res.result
    })
    //lấy thông tin sản phẩm theo id dùng API get(id) của server
    this.proService.getById(this.id).subscribe((res: any) => {
      console.log(res)
      this.proForm.patchValue(res.result)
    })
  }

  onSubmit() {
    this.proService.update(this.proForm.value).subscribe((res: any) => {
      alert("Cập nhật sản phẩm thành công")
      this.router.navigate(['/product'])
    })
  }

}


