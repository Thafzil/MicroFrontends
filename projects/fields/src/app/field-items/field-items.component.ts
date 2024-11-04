import { Component } from '@angular/core';

@Component({
  selector: 'app-field-items',
  templateUrl: './field-items.component.html',
  styleUrl: './field-items.component.css',
})
export class FieldItemsComponent {
  formData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    country: '',
    terms: false,
    feedback: '',
  };

  onSubmit() {
    console.log(this.formData);
    // You can add your form submission logic here
  }
}
