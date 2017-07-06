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


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
