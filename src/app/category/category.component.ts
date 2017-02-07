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
