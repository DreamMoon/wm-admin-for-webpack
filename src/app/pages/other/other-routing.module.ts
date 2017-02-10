import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OtherComponent } from "./other.component";
import { TableComponent } from "./table/table.component";

const routes: Routes = [
  {
    path: '',
    component: OtherComponent,
    children: [
      { path: 'table', component: TableComponent, pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OtherRoutingModule {}
