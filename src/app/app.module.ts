import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing/app-routing.module';

import {AppComponent} from './app.component';
import {InventoryComponent} from './inventory/inventory.component';
import {InventoryNewComponent} from './inventory/inventory-new/inventory-new.component';
import {InventoryListComponent} from './inventory/inventory-list/inventory-list.component';
import {InventoryEditComponent} from './inventory/inventory-edit/inventory-edit.component';

import {InventoryService} from './inventory/inventory.service';
import {MaxnumberlengthValidator} from './app-directives/maxnumberlength-validator.directive';
import {InventorySearchPipe} from './inventory-search.pipe';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InventorysDatabaseService } from './inventories-database.service';


@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    InventoryNewComponent,
    InventoryListComponent,
    InventoryEditComponent,
    MaxnumberlengthValidator,
    InventorySearchPipe
  ],
  exports: [InventorySearchPipe],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InventorysDatabaseService),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
