import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ProductCategory } from './product-categories/product-category'
import { Product } from './product-list/product'

@Injectable()
export class DataService {

  	constructor(private jsonp: Jsonp) { }

  	fetchCategories(endpoint:string):Observable<ProductCategory[]>{
  		return this.jsonp.get("https://www.reddit.com" +
        endpoint +
        "/.json?jsonp=JSONP_CALLBACK").map(data => {
            var categories:ProductCategory[] = [];
            let children = data.json().data.children;
            for(var i=0; i<children.length; i++) {
                    let category:ProductCategory = new ProductCategory();
                    category.id = 12345;
                    category.title = children[i].data.title;
                    category.imgage_url = children[i].data.url;
                    categories.push(category);
            }
            return categories;
        });
	}

    fetchProductsForCategory(source:string, endpoint:string):Observable<Product[]>{
        return this.jsonp.get("https://www.reddit.com" +
        endpoint +
        "/.json?jsonp=JSONP_CALLBACK").map(data => {
            var products:Product[] = [];
            let children = data.json().data.children;
            for(var i=0; i<children.length; i++) {
                    let product:Product = new Product();
                    product.id = 9871;
                    product.title = children[i].data.title;
                    product.description = children[i].data.title;
                    product.imgage_url = children[i].data.url;
                    products.push(product);
            }
            return products;
        });
    }
}
