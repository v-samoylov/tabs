import {EventEmitter, Injectable} from '@angular/core';
import {TabComponent} from "./tab.component";

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  index = -1;
  activeIndex = 0;

  list: Map<TabComponent, number> = new Map();

  constructor() { }

  activate(tabIdx) {
    this.activeIndex = tabIdx;
  }

  register(tab) {
    this.list.set(tab, ++this.index);
  }

  delete(tab) {
    if (this.list.get(tab) === this.activeIndex) {
      this.activate(this.list.values().next().value);
    }
    this.list.delete(tab);
  }
}
