import {Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  private title = 'My app';
  private tabActive = 0;
  private assigmentTitle = '';
  private tabs: string[] = [];

  constructor() {
    this.tabs = ['Components', 'Databindings', 'Directives'];
  }

  set setActiveTab(index: number) {
    this.tabActive = index;
  }

  get getTabActive() {
    return this.tabActive;
  }

  get getTitle() {
    return this.title;
  }

  get getAssigmentTitle() {
    return this.assigmentTitle;
  }

  get getTabs() {
    return this.tabs;
  }

  set setAssigmentTitle(topic: string) {
    this.assigmentTitle = 'Understanding how ' + topic + ' work';
  }

  ngDoCheck(): void {
    this.setAssigmentTitle = this.tabs[this.getTabActive];
  }
}
