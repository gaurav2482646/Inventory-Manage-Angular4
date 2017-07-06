import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";

import "rxjs/add/operator/toPromise";

import {Inventory} from "./inventory";

@Injectable()
export class InventoryService {

  constructor(private http: Http) {
  }

  private headers = new Headers({'Content-Type': 'application/json'});
  private inventoriesUrl = 'api/inventories';

  /*getInventories(): Promise<Inventory[]> {
   return this.http
   .get(this.inventoriesUrl)
   .toPromise()
   .then(res => res.json().data as Inventory[])
   .catch(this.handleError);
   }


   getInventory(id: number): Promise<Inventory> {
   const url = `${this.inventoriesUrl}/${id}`;
   return this.http
   .get(url)
   .toPromise()
   .then(res => res.json().data as Inventory)
   .catch(this.handleError);
   }


   createInventory(inventory: Inventory): Promise<Inventory> {
   return this.http
   .post(this.inventoriesUrl, JSON.stringify(inventory), {headers: this.headers})
   .toPromise()
   .then(res => res.json().data as Inventory)
   .catch(this.handleError);
   }

   updateInventory(inventory: Inventory): Promise<Inventory> {
   const url = `${this.inventoriesUrl}/${inventory.id}`;
   return this.http
   .put(url, JSON.stringify(inventory), {headers: this.headers})
   .toPromise()
   .then(() => inventory)
   .catch(this.handleError);
   }

   deleteInventory(inventory: Inventory): Promise<void> {
   const url = `${this.inventoriesUrl}/${inventory.id}`;
   return this.http
   .delete(url, {headers: this.headers})
   .toPromise()
   .then(() => null)
   .catch(this.handleError);
   }*/

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
