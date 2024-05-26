import {Component,OnInit} from '@angular/core';
import {BoardsService} from "../../shared/boards.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  boards!: string[];

  constructor(private boardsService: BoardsService) {
  }

  ngOnInit() {
    this.boards = this.boardsService.getAllName();
    console.log(this.boards)
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  toggleSidebar(){
    this.boardsService.toggleSidebar();
  }
}
