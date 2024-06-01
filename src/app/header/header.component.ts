import {Component, OnInit} from '@angular/core';
import {BoardsService} from "../shared/boards.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  deleteAlert:boolean = false;
  deleteMessage!:string;
  kanbanName!:string;
  constructor(private boardsService:BoardsService) {
  }
  toggleSidebar(){
    this.boardsService.toggleSidebar();
  }
  ngOnInit() {
    this.boardsService.route.subscribe(name=>{
      console.log(name)
      this.kanbanName = name;
    })
  }
  onHandleError(){
    this.deleteMessage = `Are you sure you want to delete the ‘${this.kanbanName}’ board? This action will remove all columns and tasks and cannot be reversed.`
    this.deleteAlert = !this.deleteAlert
  }

}
