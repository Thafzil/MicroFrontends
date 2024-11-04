import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostItemsComponent } from './post-items.component';

const routes: Routes = [{ path: '', component: PostItemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostItemsRoutingModule { }
