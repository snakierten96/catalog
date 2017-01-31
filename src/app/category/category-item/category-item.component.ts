import { Component, Input } from '@angular/core';

import { IItem } from '../category.types';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent {

  @Input() item: IItem;

}
