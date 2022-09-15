import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MacrosService {

  constructor(private Http: HttpClient) { }

  getCategories() {
    return this.Http.get('https://api.stlouisfed.org/fred/category?category_id=125&api_key=a2771e2daf3943dcacef4194de935ffa&file_type=json');
  }


}