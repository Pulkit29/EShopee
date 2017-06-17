import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ProductCategories } from './product-categories/product-categories'

@Injectable()
export class DataService {

  	constructor(private jsonp: Jsonp) { }

  	fetchCategories(endpoint:string):Observable<ProductCategories[]>{
  		return this.jsonp.get("https://www.reddit.com" +
        endpoint +
        "/.json?jsonp=JSONP_CALLBACK").map(data => {
            var categories:ProductCategories[] = [];
            let children = data.json().data.children;
            for(var i=0; i<children.length; i++) {
                    let category:ProductCategories = new ProductCategories();
                    category.title = children[i].data.title;
                    category.imgage_url = children[i].data.url;
                    categories.push(category);
            }
            return categories;
        });
	}
}
