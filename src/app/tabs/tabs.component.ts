import { Component } from '@angular/core';
import {TabsService} from "./tabs-service.service";

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: [ ]
})
export class TabsComponent {
  constructor(public tabsSvc: TabsService) {}
}
