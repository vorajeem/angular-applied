import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[] {
    return products;
  }

  getProductById(productId: number): Product {
    return products.find(p => p.id === productId);
  }
}


const products = [
  {
    'id': 0,
    'title': 'First Product',
    'price': 24.99,
    'rating': 4.3,
    'shortDescription': 'This is a short description of the First Product',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit .',
    'categories': ['electronics', 'hardware']
    }
,
    {
      'id': 1,
      'title': 'Second Product',
      'price': 67.99,
      'rating': 3.8,
      'shortDescription': 'This is a short description of the Second Product',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit .',
      'categories': ['electronics']
      },
      {
        'id': 2,
        'title': 'Third Product',
        'price': 17.99,
        'rating': 1.8,
        'shortDescription': 'ThisNot so nice product',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit .',
        'categories': ['electronics']
        },
        {
          'id': 3,
          'title': 'Fourth Product',
          'price': 1.99,
          'rating': 4.8,
          'shortDescription': 'This so nice product',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit .',
          'categories': ['books']
          },
          {
            'id': 4,
            'title': 'Fifth Product',
            'price': 19.99,
            'rating': 3.8,
            'shortDescription': 'This ok product',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit .',
            'categories': ['electronics','books']
            },
            {
              'id': 5,
              'title': 'Sixth Product',
              'price': 59.99,
              'rating': 4.8,
              'shortDescription': 'This good but expensive product',
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit .',
              'categories': ['electronics','books']
              }
];
