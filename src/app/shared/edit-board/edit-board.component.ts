import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {BoardsService, BoardsServiceProps, Items} from "../boards.service";

@Component({
  selector: 'app-edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.css']
})
export class EditBoardComponent implements OnInit {
  @Input() message!: string | null;
  @Input() boardInfo!: BoardsServiceProps[];
  @Output() close = new EventEmitter<void>();

  boardTypes!: Items[];
  localBoardInfo!: BoardsServiceProps[];

  constructor(private boardsService: BoardsService) { }

  ngOnInit() {
    // Create a deep copy of boardInfo
    console.log(JSON.parse(JSON.stringify(this.boardInfo)))
    console.log(this.boardInfo)
    this.localBoardInfo = JSON.parse(JSON.stringify(this.boardInfo));
    this.boardTypes = this.localBoardInfo[0].items;
  }

  deleteTypeById(id: number) {
    this.boardTypes = this.boardTypes.filter(item => item.id !== id);
    console.log(this.boardTypes);
  }

  onEdit() {
    // Update the original boardInfo with the changes
    this.boardInfo[0].items = this.boardTypes;
    console.log(this.boardInfo);
    this.boardsService.changeBoard(this.boardInfo[0].id, this.boardInfo[0]);
    this.onClose();
  }

  onClose() {
    this.close.emit();
  }
}
