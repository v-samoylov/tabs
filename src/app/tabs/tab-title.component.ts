import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {TabsService} from "./tabs-service.service";

@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: [ ]
})
export class TabTitleComponent {
  @HostListener("click") onClick(){
    console.log("User Click using Host Listener")
    this.tabsSvc.activate( this.index );
  }

  index: number;

  constructor(public tabsSvc: TabsService) {
    this.index = tabsSvc.index;
  }
}
