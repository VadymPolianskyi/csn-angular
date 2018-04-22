import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];

  @Input() product: Product;
  @Input() newProduct: Product;

  ngOnInit() {
    this.getProducts();
    this.product = new Product();
    this.newProduct = new Product();
  }

  constructor(
    private productService: ProductService
  ) {}

  setProduct(product: Product) {
    this.product = product;
  }

  getProducts(): void {
    this.productService.getAllProducts()
      .subscribe(products => this.products = products);
  }

}
