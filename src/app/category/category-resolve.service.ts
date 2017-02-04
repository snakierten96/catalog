import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { IItem } from './category.types';
import { CategoryDataService } from './category-data.service';

@Injectable()
export class CategoryResolveService implements Resolve<Observable<IItem[]>> {

  constructor(private categoryData: CategoryDataService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IItem[]> {
    return this.categoryData.getItems().toArray();
  }

}
