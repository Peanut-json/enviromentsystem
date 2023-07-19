import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanDisplayComponent } from './pages/kanban-display/kanban-display.component';

const routes: Routes = [
  {
    path: '',
    component: KanbanDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
