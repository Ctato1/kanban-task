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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    KanbanComponent,
    NameComponent,
    CreateBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
