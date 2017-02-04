import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

import { IItem } from './category.types';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  list: IItem[] = [];

  /*
  list: IItem[] = [
    { pos: 1, title: 'One' },
    { pos: 2, title: 'Two' },
    { pos: 3, title: 'Three' },
    { pos: 4, title: 'Four' },
    { pos: 5, title: 'Five' },
    { pos: 6, title: 'Six' },
    { pos: 7, title: 'Seven' },
    { pos: 8, title: 'Eight' },
    { pos: 9, title: 'Nine' },
    { pos: 10, title: 'Ten' },
    { pos: 11, title: 'Eleven' },
    { pos: 12, title: 'Twelve' }
  ];
  */

  private _subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._subscriptions.push(
      this.route.data.subscribe(
        (data: { items: IItem[] }) => this.list = data.items,
        err => console.error(err)
      )
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(sub => sub.unsubscribe());
    this._subscriptions = [];
  }

}
