import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContaFormComponent } from './conta/conta-form/conta-form.component';
import { ContaListComponent } from './conta/conta-list/conta-list.component';

const routes: Routes = [
  { path: 'form', component: ContaFormComponent },
  { path: 'list', component: ContaListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
