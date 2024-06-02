import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { KanbanComponent } from './kanban/kanban.component';
import { NameComponent } from './kanban/name/name.component';
import { CreateBoardComponent } from './shared/create-board/create-board.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { DropdownDirective } from './shared/dropdown.directive';
import { DeleteAlertComponent } from './shared/delete-alert/delete-alert.component';
import { EditBoardComponent } from './shared/edit-board/edit-board.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    KanbanComponent,
    NameComponent,
    CreateBoardComponent,
    DropdownDirective,
    DeleteAlertComponent,
    EditBoardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
