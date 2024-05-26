import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KanbanComponent} from "./kanban/kanban.component";
import {NameComponent} from "./kanban/name/name.component";

const routes: Routes = [
  {path: "", redirectTo: "kanban", pathMatch: "full"},
  {
    path: "kanban", component: KanbanComponent, children: [
      {path: ":name", component: NameComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
