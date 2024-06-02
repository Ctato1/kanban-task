// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Params } from '@angular/router';
// import { BoardsService, BoardsServiceProps, items } from '../../shared/boards.service';
// import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
//
// @Component({
//   selector: 'app-name',
//   templateUrl: './name.component.html',
//   styleUrls: ['./name.component.css']
// })
// export class NameComponent implements OnInit {
//   currentRoute!: string;
//   currentBoard?: BoardsServiceProps;
//
//   constructor(private boardsService: BoardsService, private route: ActivatedRoute) {}
//
//   allItems: items[] = [];
//   allTypes!: string[];
//
//   ngOnInit() {
//     this.route.params.subscribe((params: Params) => {
//       this.currentRoute = params['name'];
//       this.boardsService.route.next(this.currentRoute);
//
//       this.currentBoard = this.boardsService.getBoardByName(this.currentRoute);
//       this.allTypes = this.boardsService.allType(this.currentRoute);
//       this.allItems = this.boardsService.getItems(this.currentRoute);
//
//       this.boardsService.currentBoard.subscribe((board: BoardsServiceProps) => {
//         this.currentBoard = board;
//         this.allItems = board.items;
//       });
//     });
//   }
//
//   getItemsByType(type: string): items[] {
//     return this.allItems.filter(item => item.type === type);
//   }
//
//   drop(event: CdkDragDrop<items[]>, type: string) {
//     if (event.previousContainer === event.container) {
//       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
//     } else {
//       const item = event.previousContainer.data[event.previousIndex];
//       item.type = type;
//       transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
//       this.boardsService.changeType(this.currentRoute, item, type);
//     }
//     console.log(this.allItems)
//   }
//
//   trackById(index: number, item: items): number {
//     return item.id;
//   }
// }

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {BoardsService, BoardsServiceProps, Items} from '../../shared/boards.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  currentRoute!: string;

  allItems: Items[] = [];
  allTypes!: string[];

  constructor(private boardsService: BoardsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.currentRoute = params['name'];
      this.boardsService.route.next(this.currentRoute);

      // this.currentBoard = this.boardsService.getBoardByName(this.currentRoute);
      this.allTypes = this.boardsService.allType(this.currentRoute);
      this.allItems = this.boardsService.getItems(this.currentRoute);

    });
    this.boardsService.currentBoard.subscribe((item: any) => {
      this.allTypes = this.boardsService.allType(this.currentRoute);
      this.allItems = this.boardsService.getItems(this.currentRoute);
    })

  }

  getItemsByType(type: string): Items[] {
    return this.allItems.filter(item => item.type === type);
  }

  drop(event: CdkDragDrop<Items[]>, type: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const item = event.previousContainer.data[event.previousIndex];
      item.type = type;
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      // this.boardsService.changeType(this.currentRoute, item, type);
    }
    this.updateAllTypes();
    console.log(this.allItems)
  }

  updateAllTypes() {
    const currentTypes = new Set(this.allItems.map(item => item.type));
    this.allTypes = this.allTypes.filter(type => currentTypes.has(type));
  }

  trackById(index: number, item: Items): number {
    return item.id;
  }

  countUncheckedSubtasks(item: Items): number {
    return item.subtasks?.filter(subtask => subtask.checked).length ?? 0;
  }

}

