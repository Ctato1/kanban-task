import {Component, OnInit} from '@angular/core';
import {BoardsService} from "./shared/boards.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'kanban-task';
  sidebar!:boolean;

  constructor(private boardsService:BoardsService) {
  }
  ngOnInit() {
    this.boardsService.showBoard.subscribe(res=>
      this.sidebar = res
    )
  }
  toggleSidebar(){
    this.boardsService.toggleSidebar();
  }
}
