import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ProductCategory } from './product-category';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css'],
  providers: [DataService]
})

export class ProductCategoriesComponent implements OnInit {
  
  endpoint : string= "/r/askreddit";

  categories: ProductCategory[];

  constructor(private data: DataService) { }

  ngOnInit() {
  	this.data.fetchCategories(this.endpoint).subscribe(
        categories => this.categories = categories,
  		e => console.log('onError: %s', e),
  		() => console.log('onCompleted')

	);
  }

}
