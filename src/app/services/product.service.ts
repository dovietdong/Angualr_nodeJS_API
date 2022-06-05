import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  //lấy danh sách sản phẩm
  getList(): any {
    return this.http.get('http://localhost:3000/product')
  }

  //xóa sản phẩm
  delete(id: number): any {
    return this.http.delete('http://localhost:3000/product/' + id)
  }

  //api thêm mới san pham
  add(data: any): any {
    return this.http.post('http://localhost:3000/product/', data)
  }

  //api cập nhật san pham
  getById(id: number) {
    return this.http.get('http://localhost:3000/product/' + id)
  }

  //api cập nhật san pham
  update(data: any) {
    return this.http.put('http://localhost:3000/product' , data)
  }
}
