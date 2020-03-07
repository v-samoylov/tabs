import {Component, OnInit} from '@angular/core';
import {TabsService} from "./tabs-service.service";

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: [ ]
})
export class TabContentComponent {
  index: number;

  constructor(public tabsSvc: TabsService) {
    this.index = this.tabsSvc.index;
  }
}
