import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Inventory} from './inventory';
import {InventoryService} from './inventory.service';
import {FormGroup} from '@angular/forms';


const INVENTORIES: Inventory[] = [
  {id: 1, name: 'Metro', type: 'fan', price: 10},
  {id: 2, name: 'BSNL', type: 'telephone', price: 15},
  {id: 3, name: 'Cannon', type: 'printer', price: 20},
  {id: 4, name: 'Sony', type: 'projector', price: 10},
  {id: 5, name: 'ABC', type: 'fan', price: 10}
];


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventories: Inventory[];

  constructor() {
  }

  ngOnInit() {

    this.inventories = INVENTORIES;
  }

  createInventory(inventoryForm: FormGroup): void {


    if (this.inventories.length > 0) {
      const lastInventory = this.inventories.slice(-1)[0];
      inventoryForm.value.id = lastInventory.id + 1;
    } else {
      inventoryForm.value.id = 1;
    }
    this.inventories.push(inventoryForm.value);
    inventoryForm.reset();
  }

  deleteInventory(inventory: Inventory): void {

    this.inventories = this.inventories.filter(b => b !== inventory);
  }

  updateInventory(inventories: any) {

    const i = this.inventories.indexOf(inventories.original);
    this.inventories[i] = inventories.edited;
  }


}
