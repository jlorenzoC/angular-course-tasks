import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {
  @Input() name = 'name';
  @Input() index = 1;
  @Input() tabActive: number;
  @Output() activatedItem = new EventEmitter<number>();

  activateItem() {
    this.activatedItem.emit(this.index);
  }
}
