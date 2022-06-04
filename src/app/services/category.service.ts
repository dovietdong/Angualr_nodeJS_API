import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) {  }

  //lấy danh sách danh mục
  getList():any{
    return this.http.get('http://localhost:3000/category')
  }
  
  //xóa danh mục
  delete(id : number):any{
    return this.http.delete('http://localhost:3000/category/' + id)
  }

  //api thêm mới danh mục
  add(data : any ):any{
    return this.http.post('http://localhost:3000/category/',data)
  }

  //api cập nhật danh mục
  update(data:any){
    return this.http.put('http://localhost:3000/category/'+ data.id ,data)
  }
}
