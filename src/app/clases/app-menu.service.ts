import { Injectable } from '@angular/core';
import { AppMenu } from './app-menu';
import { AppMenuItem } from './app-menu-item';

@Injectable({
  providedIn: 'root'
})
export class AppMenuService {

  constructor() { }

  getMenu(): AppMenu{
    return new AppMenu('MainMenu', [
      new AppMenuItem('Your Info', '/step1'),
      new AppMenuItem('Select plan', '/step2'),
      new AppMenuItem('Add-ons', '/step3'),
      new AppMenuItem('Summary', '/step4'),
    ]);
  }
}
