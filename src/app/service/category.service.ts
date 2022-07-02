import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../api/category';
import { ListResponse } from '../responses/list-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    apiUrl = environment.aselevatorUrl;
  constructor(private httpClient: HttpClient) { }

  getAllCategory():Observable<ListResponse<Category>>{

    return this.httpClient.get<ListResponse<Category>>(this.apiUrl + 'Categories/GetAll');
  }
  deleteCategory(Id:number):Observable<Category>{

    return this.httpClient.delete<Category> (this.apiUrl+'Categories?id=' + Id); //buna dikkat
    //buralara dto yazabiliriz
  }
  }
