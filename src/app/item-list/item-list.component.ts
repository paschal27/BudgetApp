import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

  @Input() budgetItems: BudgetItem[] | undefined
  @Output() deleteVal: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>

  delete(item: BudgetItem) {
    this.deleteVal.emit(item)
  }

}
