import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'posts',
    loadChildren: () => import('posts/Module').then((m) => m.PostItemsModule),
  },
  {
    path: 'users',
    loadChildren: () => import('users/Module').then((m) => m.UserItemsModule),
  },
  {
    path: 'fields',
    loadChildren: () => import('fields/Module').then((m) => m.FieldItemsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
