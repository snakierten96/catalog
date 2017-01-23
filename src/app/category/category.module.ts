import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CategoryRoutingModule,
  ],
  declarations: [
    CategoryComponent,
  ]
})
export class CategoryModule { }
