import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private proService: ProductService,
    private cateService: CategoryService,
  ) { }

  products: any
  status: any
  list: any
  cats: any
  pro_cat:any

  ngOnInit(): void {
    this.getList()
    this.cateService.getList().subscribe((res: any) => {
      this.list = res.result
      this.cats = res.result
    })
  }

  getList() {
    this.proService.getList().subscribe((res: any) => {
      this.list = res.result
      this.products = res.result
      // this.pro_cat = this.cats[this.products.id]
      console.log(this.products.id)
    })
  }

  onDelete(id: number) {
    if (confirm('bạn có muốn xóa ko?')) {
      this.proService.delete(id).subscribe((res: any) => {
      })
    }
    return this.getList();
  }

  //hàm tìm kiếm dùng RegExp
  onSearch(event: any) {
    var data: any

    //console.log(seatMatch)
    setTimeout(() => {
      var seatMatch = new RegExp(event.target.value, 'i')
      console.log(seatMatch)
      this.products = this.list.filter((item: any) => {
        //console.log(item.name.match(seatMatch))
        // if(this.list==null){
        //   location.reload();
        // }
        return item.name.toLowerCase().match(seatMatch)
      })
    }, 300)
  }

}
