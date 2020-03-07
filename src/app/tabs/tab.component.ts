import {Component, OnDestroy, OnInit} from '@angular/core';
import {TabsService} from "./tabs-service.service";

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: [ ]
})
export class TabComponent implements OnDestroy {

  constructor(public tabsSvc: TabsService) {
    this.tabsSvc.register(this);
  }

  ngOnDestroy(): void {
    this.tabsSvc.delete(this);
  }
}
