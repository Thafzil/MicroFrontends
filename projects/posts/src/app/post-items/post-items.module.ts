import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostItemsRoutingModule } from './post-items-routing.module';
import { PostItemsComponent } from './post-items.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PostItemsComponent],
  imports: [CommonModule, PostItemsRoutingModule, HttpClientModule],
})
export class PostItemsModule {}
