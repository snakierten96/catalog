import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { INavItem, NAVITEMS } from './app.navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'app works!';
  navItems: INavItem[] = NAVITEMS; 

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
