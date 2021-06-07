import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'details/:id', loadChildren: () => import('./pages/todo-details/todo-details.module').then(m => m.TodoDetailsPageModule) },
  { path: 'details', loadChildren: () => import('./pages/todo-details/todo-details.module').then(m => m.TodoDetailsPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
