import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { IItem } from './category.types';

@Injectable()
export class CategoryDataService {

  private dataUrl = 'api/category';

  constructor(private http: Http) { }

  getItems(): Observable<IItem> {
    return this.http.get(this.dataUrl)
      .flatMap(response => Observable.from(response.json().data))
  }

}
