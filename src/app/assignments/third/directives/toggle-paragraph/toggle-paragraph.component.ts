import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-toggle-paragraph',
  templateUrl: './toggle-paragraph.component.html',
  styles: [
      `
      .date {
        background-color: grey;
      }
    `,
  ],
})
export class ToggleParagraphComponent implements OnInit {
  private dates: Date[] = [];
  private show = false;

  constructor() {
  }

  get getDates() {
    return this.dates;
  }

  set setDates(dates: Date[]) {
    this.dates = dates;
  }

  get getShow() {
    return this.show;
  }

  set setShow(show: boolean) {
    this.show = show;
  }

  ngOnInit() {
  }

  deleteDate(index: number) {
    this.dates.splice(index, 1);
  }

  toggleSecretInfo() {
    this.setShow = !this.getShow;
    this.getDates.push(new Date());
  }
}
