import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldItemsRoutingModule } from './field-items-routing.module';
import { FieldItemsComponent } from './field-items.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FieldItemsComponent],
  imports: [CommonModule, FieldItemsRoutingModule, FormsModule],
})
export class FieldItemsModule {}
