import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CategoryComponent } from './category.component';
import { CategoryItemComponent } from './category-item';

import { CategoryDataService } from './category-data.service';
import { CategoryResolveService } from './category-resolve.service';

import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CategoryRoutingModule,
  ],
  providers: [
    CategoryDataService,
    CategoryResolveService,
  ]
})
export class CategoryModule { }
