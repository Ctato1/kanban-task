import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BoardsService} from "../boards.service";

@Component({
  selector: 'app-delete-alert',
  templateUrl: './delete-alert.component.html',
  styleUrl: './delete-alert.component.css'
})
export class DeleteAlertComponent {
  @Input() message!:string | null;
  @Input() boardName!:string;
  @Output() close = new EventEmitter<void>();
  constructor(private boardService:BoardsService) {
  }
  onDelete(){
    this.boardService.deleteBoardByName(this.boardName);
    this.onClose();
  }
  onClose(){
    this.close.emit();
  }
}
