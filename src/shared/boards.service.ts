import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

interface BoardsServiceProps{
  name:string,
  items:string[],
}
@Injectable({providedIn:"root"})

export class BoardsService {
  showBoard = new BehaviorSubject<boolean>(true);

  boards:BoardsServiceProps[] = [
    {
      name:"Platform Launch",
      items:["Build Platform for onboarding flow"]
    },
    {
      name:"Marketing Plan",
      items:["Build Marketing for onboarding flow"]
    },
    {
      name:"Roadmap",
      items:["Build Roadmap for onboarding flow"]
    }
  ];

  createBoard(name:string){
    this.boards.push({name:name,items:[]})
    return this.boards.slice();
  }

  getAllName(){
    return this.boards.map(item=>(item.name))
  }
  toggleSidebar(){
    this.showBoard.next(!this.showBoard.value)
  }

}
