import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Route} from "@angular/router";
import {BoardsService, BoardsServiceProps} from "../../shared/boards.service";

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrl: './name.component.css'
})
export class NameComponent implements OnInit{
  currentRoute!:string;
  currentBoard?:BoardsServiceProps;
  constructor(private boardsService: BoardsService,private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((res:Params)=> {
      this.boardsService.route.next(res['name'])
      this.currentRoute = res['name']
      this.currentBoard = this.boardsService.getBoardByName(this.currentRoute);
      this.boardsService.currentBoard.subscribe((item:BoardsServiceProps)=>{
        this.currentBoard = item;
        console.log(this.currentBoard)
      })


    })

  }
}
