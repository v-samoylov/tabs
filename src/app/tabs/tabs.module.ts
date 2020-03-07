import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabTitleComponent } from './tab-title.component';
import { TabContentComponent } from './tab-content.component';
import {TabsComponent} from "./tabs.component";
import {TabsService} from "./tabs-service.service";
import {TabComponent} from "./tab.component";

@NgModule({
  exports: [
    TabComponent,
    TabsComponent,
    TabTitleComponent,
    TabContentComponent,
  ],
  declarations: [
    TabComponent,
    TabsComponent,
    TabTitleComponent,
    TabContentComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TabsService,
  ]
})
export class TabsModule { }
