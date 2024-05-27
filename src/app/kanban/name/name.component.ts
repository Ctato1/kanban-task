import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from "@angular/router";
import {BoardsService} from "../../shared/boards.service";

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrl: './name.component.css'
})
export class NameComponent implements OnInit{

  constructor(private boardsService: BoardsService,private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(res=> {
      this.boardsService.route.next(res['name'])
    })
  }
}
