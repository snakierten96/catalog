import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CategoryComponent } from './category.component';
import { CategoryItemComponent } from './category-item';

import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CategoryRoutingModule,
  ],
  declarations: [
    CategoryComponent,
    CategoryItemComponent,
  ]
})
export class CategoryModule { }
