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

  ngDoCheck(): void {
    switch (this.getTabActive) {
      case 0:
        this.assigmentTitle = 'Understanding how Components work';
        break;
      case 1:
        this.assigmentTitle = 'Understanding how Databindings work';
        break;
      case 1:
        this.assigmentTitle = 'Understanding how Directives work';
        break;
      default:
        break;
    }
  }
}
