import {Component, OnInit} from '@angular/core';
import {BoardsService} from "../shared/boards.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  kanbanName!:string;
  constructor(private boardsService:BoardsService,private route:ActivatedRoute,private router:Router) {
  }
  toggleSidebar(){
    this.boardsService.toggleSidebar();
  }
  ngOnInit() {
    this.boardsService.route.subscribe(name=>{
      this.kanbanName = name;
    })
  }
  onDeleteBoard(){
    this.boardsService.deleteBoardByName(this.kanbanName)
  }

}
