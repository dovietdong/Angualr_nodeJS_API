import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { empty } from 'rxjs';
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
  catForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    status: new FormControl(1)
  });

  constructor(private proService: ProductService) { }


  ngOnInit(): void {
    this.getList()
  }
  getList() {
    this.proService.getList().subscribe((res: any) => {
      this.list = res.result
      this.cats = res.result
    })
  }

  //hàm tìm kiếm dùng RegExp
  onSearch(event: any) {
    var data: any

    //console.log(seatMatch)
    setTimeout(() => {
      var seatMatch = new RegExp(event.target.value, 'i')
      console.log(seatMatch)
      this.cats = this.list.filter((item: any) => {
        //console.log(item.name.match(seatMatch))
        // if(this.list==null){
        //   location.reload();
        // }
        return item.name.toLowerCase().match(seatMatch)
      })
    }, 300)
  }
}
