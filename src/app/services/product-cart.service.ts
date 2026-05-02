import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
 public count;
 public sum;
  constructor() { 
   this.count=0;
   this.sum=0;
  }
  
}
