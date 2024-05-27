import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

interface items{
  type:string;
  description?:string;
  subtasks?:{checked:boolean;name:string}[]
}
export interface BoardsServiceProps{
  name:string,
  items:items[],
}
@Injectable({providedIn:"root"})

export class BoardsService {
  showBoard = new BehaviorSubject<boolean>(true);
  route = new BehaviorSubject<string>("");
  currentBoard:any = new Subject<BoardsServiceProps[]>();

  boards:BoardsServiceProps[] = [
    {
      name:"Platform Launch",
      items:[
        {
          type:"Todo",
          description:"We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks:[
            {
              checked:true,
              name:"Research competitor pricing and business models",
            },
            {
              checked:false,
              name:"Outline a business model that works for our solution",
            },
            {
              checked:false,
              name:"Talk to potential customers about our proposed solution and ask for fair price expectancy",
            }
          ]

        },
      ]
    },
    {
      name:"Marketing Plan",
      items:[
        {
          type:"Doing",
          description:"We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks:[
            {
              checked:true,
              name:"Research competitor pricing and business models",
            },
            {
              checked:false,
              name:"Outline a business model that works for our solution",
            },
            {
              checked:false,
              name:"Talk to potential customers about our proposed solution and ask for fair price expectancy",
            }
          ]

        },
      ]
    },
    {
      name:"Roadmap",
      items:[
        {
          type:"Done",
          description:"We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks:[
            {
              checked:true,
              name:"Research competitor pricing and business models",
            },
            {
              checked:false,
              name:"Outline a business model that works for our solution",
            },
            {
              checked:false,
              name:"Talk to potential customers about our proposed solution and ask for fair price expectancy",
            }
          ]

        },
      ]
    },
  ];

  createBoard(name:string){
    this.boards.push({name:name,items:[]})
    return this.boards.slice();
  }
  getBoardByName(name:string){
    let currentBoard:BoardsServiceProps = this.boards.filter(item=>item.name === name).slice()[0];
    this.currentBoard.next(currentBoard)
    return currentBoard;
  }

  getAllName(){
    return this.boards.map(item=>(item.name))
  }
  toggleSidebar(){
    this.showBoard.next(!this.showBoard.value)
  }

}
