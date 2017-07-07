import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Inventory} from '../inventory';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
})
export class InventoryListComponent implements OnInit {
  public searchString: string;
  @Input() inventories;
  @Output() destroyInventoryEvent = new EventEmitter();
  @Output() updateInventoryEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  deleteInventory(inventory: Inventory) {
    this.destroyInventoryEvent.emit(inventory);
  }

  updateInventory(inventories: any) {
    this.updateInventoryEvent.emit(inventories);
  }

}
