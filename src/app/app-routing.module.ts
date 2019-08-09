import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentslistComponent } from './departmentslist/departmentslist.component';

const routes: Routes = [
  {path : 'demo',component: DepartmentslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
