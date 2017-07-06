import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Inventory} from '../inventory';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {MaxnumberlengthValidator} from '../../app-directives/maxnumberlength-validator.directive';
import $ from 'jquery';


@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.css']
})
export class InventoryEditComponent implements OnInit {

  @Input() inventory: Inventory;
  @Output() updateInventoryEvent = new EventEmitter();
  inventoryEdit: Inventory = new Inventory();

  inventoryForm: FormGroup;

  formErrors = {
    'name': '',
    'type': '',
    'price': ''
  };
  validationMessages = {
    'name': {
      'required': 'The Name field is required.',
      'minlength': 'The Name field must contain at least 4 characters.',
      'maxlength': 'The Name field must not contain more than 24 characters.'
    },
    'type': {
      'required': 'The Type field is mandatory.'
    },
    'price': {
      'required': 'The Price field is mandatory.',
      'maxlength': 'The Price must not be more than 99$.'
    }
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    Object.assign(this.inventoryEdit, this.inventory);
    this.buildForm();
  }

  buildForm(): void {
    this.inventoryForm = this.fb.group({
      'name': [this.inventoryEdit.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24)
      ]
      ],
      'type': [this.inventoryEdit.type, [
        Validators.required
      ]
      ],
      'price': [this.inventoryEdit.price, [
        Validators.required,
        MaxnumberlengthValidator.maxNumberLength(2)
      ]
      ]
    });

    this.inventoryForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.inventoryForm) {
      return;
    }
    const form = this.inventoryForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  updateInventory() {
    $('.modal-backdrop').remove();
    this.updateInventoryEvent.emit({original: this.inventory, edited: this.inventoryEdit});
  }

  cancelUpdate() {
    Object.assign(this.inventoryEdit, this.inventory);
  }

}
