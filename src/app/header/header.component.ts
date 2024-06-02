import {Component, OnInit} from '@angular/core';
import {BoardsService, BoardsServiceProps} from "../shared/boards.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  deleteAlert:boolean = false;
  editBoard:boolean = false;
  currentBoard!:BoardsServiceProps[];

  deleteMessage!:string;
  kanbanName!:string;
  constructor(private boardsService:BoardsService) {
  }
  toggleSidebar(){
    this.boardsService.toggleSidebar();
  }
  ngOnInit() {
    this.boardsService.route.subscribe(name=>{
      this.kanbanName = name;
    })
  }
  onEditBoard(){
    let currentBoard = this.boardsService.getBoardByName(this.kanbanName)

    this.currentBoard = this.boardsService.editBoard(currentBoard?.id);
    this.editBoard = !this.editBoard
  }

  onHandleError(){
    this.deleteMessage = `Are you sure you want to delete the ‘${this.kanbanName}’ board? This action will remove all columns and tasks and cannot be reversed.`
    this.deleteAlert = !this.deleteAlert
  }

}
