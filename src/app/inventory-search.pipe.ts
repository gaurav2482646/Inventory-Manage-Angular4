import {Pipe, PipeTransform} from '@angular/core';
import {Inventory} from "./inventory/inventory";

@Pipe({
  name: 'inventorySearch'
})
export class InventorySearchPipe implements PipeTransform {

  transform(inventories: Inventory[], args: any[]): any {
    return inventories.filter(inventory => inventory.name.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
  }

}
