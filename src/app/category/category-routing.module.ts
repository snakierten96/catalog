import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { CategoryResolveService } from './category-resolve.service';

const routes: Routes = [
  { 
    path: 'category',
    component: CategoryComponent,
    resolve: {
      items: CategoryResolveService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CategoryRoutingModule { }
