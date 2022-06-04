import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { empty } from 'rxjs';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cats: any
  status : any
  list:any
  //khai báo sử dụng form, khai báo các giá trị sử dụng trong form
  catForm : FormGroup = new FormGroup({
    id: new FormControl(),
    name : new FormControl('', Validators.required),
    status : new FormControl(1)
  });

  constructor(private cateService: CategoryService) { }

  
  ngOnInit(): void {
    this.getList()
  }
  getList() {
    this.cateService.getList().subscribe((res: any) => {
      this.list = res.result
      this.cats = res.result
    })
  }

  onDelete(id: number) {
    if (confirm('bạn có muốn xóa ko?')) {
      this.cateService.delete(id).subscribe((res: any) => {
        this.getList();
      })
    }
  }

  onSubmit(){
    console.log(this.catForm.value)
    this.cateService.add(this.catForm.value).subscribe((res: any) => {
      this.getList();
    })
  }

  onEdit(data:any){
    console.log(data)
    this.catForm.patchValue(data)
  }

  onUpdate(){
    console.log(this.catForm.value)
    this.cateService.update(this.catForm.value).subscribe((res: any) => {
      this.getList(); 
    })
  }

  //hàm tìm kiếm dùng RegExp
  onSearch(event : any){
    var data :any
    
    //console.log(seatMatch)
     setTimeout(()=>{
      var seatMatch = new RegExp(event.target.value, 'i')
      console.log(seatMatch)
      this.cats = this.list.filter((item : any)=>{
        //console.log(item.name.match(seatMatch))
        // if(this.list==null){
        //   location.reload();
        // }
        return item.name.toLowerCase().match(seatMatch)
      })
    } , 300)
  }

}
