import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { DataService } from '../data.service';
import { Product } from './product';
import { ProductCategory } from '../product-categories/product-category';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [DataService]
})
export class ProductListComponent implements OnInit {
  
  @Input() endpoint : string;
  products: Product[];
  categories : ProductCategory[];
  constructor(private route: ActivatedRoute, private data:DataService) { }

  ngOnInit() {
      let id = this.route.snapshot.paramMap.get('id');
      let source = '/categories/id';
      this.endpoint = "/r/askreddit";
      this.data.fetchProductsForCategory(source, this.endpoint).subscribe(
      products => this.products = products,
      e => console.log('onError: %s', e),
      () => console.log('onCompleted')
	   );
  }

}
