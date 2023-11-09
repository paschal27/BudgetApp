import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-item-list-card',
  templateUrl: './item-list-card.component.html',
  styleUrls: ['./item-list-card.component.scss']
})
export class ItemListCardComponent {

  @Input() item: BudgetItem | undefined
  @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>

  deleteEmitter() {
    this.deleteItem.emit()
  }

  onCardClick() {
    this.cardClick.emit()
  }

}
