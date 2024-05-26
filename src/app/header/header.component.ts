import {Component, OnInit} from '@angular/core';
import {BoardsService} from "../../shared/boards.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{

  constructor(private boardsService:BoardsService) {
  }
  toggleSidebar(){
    this.boardsService.toggleSidebar();
  }

}
