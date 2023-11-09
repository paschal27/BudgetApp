import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

  @Input() budgetItems: BudgetItem[] | undefined
  @Output() deleteVal: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>

  constructor(public dialog: MatDialog) {

  }

  delete(item: BudgetItem) {
    this.deleteVal.emit(item)
  }

  // onCardClicked(item: BudgetItem) {
  //   const dialogRef = this.dialog.open(EditItemModalComponent, {
  //     width: '580px',
  //     data: item
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     // check if result has a value
  //     if (result) {
  //       this.budgetItems![this.budgetItems!.indexOf(item)] = result
  //     }
  //   })
  // }
  
  }
