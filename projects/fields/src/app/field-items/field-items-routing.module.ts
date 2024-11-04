import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldItemsComponent } from './field-items.component';

const routes: Routes = [{ path: '', component: FieldItemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldItemsRoutingModule { }
