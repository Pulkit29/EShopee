import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ProductCategories } from '../product-categories/product-categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  
  @Input() source : string;
  categories: ProductCategories[];
  constructor(private data: DataService) { }

  ngOnInit() {

  	this.data.fetchCategories(this.source).subscribe(
        categories => this.categories = categories,
  		e => console.log('onError: %s', e),
  		() => console.log('onCompleted')

	);
  }

}
