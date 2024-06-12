import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BoardsService, BoardsServiceProps, Items} from "../boards.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.css']
})
export class EditBoardComponent implements OnInit {
  @Input() message!: string | null;
  @Input() boardInfo!: BoardsServiceProps[];
  @Output() close = new EventEmitter<void>();
  error!: string | null;

  boardTypes!: Items[];
  localBoardInfo!: BoardsServiceProps[];
  constructor(private boardsService: BoardsService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Create a deep copy of boardInfo

    console.log(JSON.parse(JSON.stringify(this.boardInfo)))
    console.log(this.boardInfo)
    this.localBoardInfo = JSON.parse(JSON.stringify(this.boardInfo));
    this.boardTypes = this.localBoardInfo[0].items;
  }

  deleteTypeById(id: number) {
    this.boardTypes = this.boardTypes.filter(item => item.id !== id);
  }

  onEdit() {
    // changed name
    const changedName = this.localBoardInfo[0].name.trim()
    // check if this board exist
    const checkName: BoardsServiceProps | undefined = this.boardsService.getBoardByName(changedName)
    if (checkName && this.boardInfo[0].name.trim() !== changedName) {
      this.error = "Board with this name is already use"
      return;
    }
    this.error = null;
    // Update the original boardInfo with the changes
    this.boardInfo[0].items = this.boardTypes;
    this.boardInfo[0].name = changedName;
    this.boardsService.changeBoard(this.boardInfo[0].id, this.boardInfo[0]);
    this.router.navigate(['kanban', this.boardInfo[0].name])
    this.onClose();
  }

  onClose() {
    this.close.emit();
  }
}
