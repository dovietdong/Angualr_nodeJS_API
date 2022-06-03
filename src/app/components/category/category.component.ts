import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor( private cateService : CategoryService) { }
  cats:any

  ngOnInit(): void {
    this.cateService.getList().subscribe((res:any)=>{
      this.cats = res.result
  })
  }

}
