//
// import { Injectable } from '@angular/core';
// import {BehaviorSubject, Subject} from 'rxjs';
//
// export interface items {
//   type: string;
//   name: string;
//   id: number;
//   description?: string;
//   subtasks?: { checked: boolean; name: string }[];
// }
//
// export interface BoardsServiceProps {
//   name: string;
//   items: items[];
// }
//
// @Injectable({
//   providedIn: 'root'
// })
// export class BoardsService {
//     showBoard = new BehaviorSubject<boolean>(true);
//   route = new BehaviorSubject<string>("");
//   currentBoard:any = new Subject<BoardsServiceProps[]>();
//
//   boards:any = [
//     {
//       name:"Platform Launch",
//       items:[
//         {
//           type:"Todo",
//           id: 1,
//           name:"Hello ghuys",
//           description:"We know what we're planning to build for version one." +
//             " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
//           subtasks:[
//             {
//               checked:true,
//               name:"Research competitor pricing and business models",
//             },
//             {
//               checked:false,
//               name:"Outline a business model that works for our solution",
//             },
//             {
//               checked:false,
//               name:"Talk to potential customers about our proposed solution and ask for fair price expectancy",
//             }
//           ]
//         },
//         {
//           type:"Todo",
//           id: 2,
//           name:"Whats happening",
//           description:"We know what we're planning to build for version one." +
//             " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
//           subtasks:[
//             {
//               checked:true,
//               name:"Research competitor pricing and business models",
//             },
//             {
//               checked:false,
//               name:"Outline a business model that works for our solution",
//             },
//             {
//               checked:false,
//               name:"Talk to potential customers about our proposed solution and ask for fair price expectancy",
//             }
//           ]
//         },
//         {
//           type:"Done",
//           id: 3,
//           name:"stil raining?",
//           description:"We know what we're planning to build for version one." +
//             " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
//           subtasks:[
//             {
//               checked:true,
//               name:"Research competitor pricing and business models",
//             },
//             {
//               checked:false,
//               name:"Outline a business model that works for our solution",
//             },
//             {
//               checked:false,
//               name:"Talk to potential customers about our proposed solution and ask for fair price expectancy",
//             }
//           ]
//
//         },
//         {
//           type:"Done",
//           id: 4,
//           name:"i dont know how",
//           description:"We know what we're planning to build for version one." +
//             " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
//           subtasks:[
//             {
//               checked:true,
//               name:"Research competitor pricing and business models",
//             },
//             {
//               checked:false,
//               name:"Outline a business model that works for our solution",
//             },
//             {
//               checked:false,
//               name:"Talk to potential customers about our proposed solution and ask for fair price expectancy",
//             }
//           ]
//
//         },
//         {
//           type:"Example",
//           id: 5,
//           name:"maybe facebook",
//           description:"We know what we're planning to build for version one." +
//             " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
//           subtasks:[
//             {
//               checked:true,
//               name:"Research competitor pricing and business models",
//             },
//             {
//               checked:false,
//               name:"Outline a business model that works for our solution",
//             },
//             {
//               checked:false,
//               name:"Talk to potential customers about our proposed solution and ask for fair price expectancy",
//             }
//           ]
//
//         },
//       ]
//     },
//     {
//       name:"Marketing Plan",
//       items:[
//         {
//           type:"Doing",
//           id: 6,
//           name:"Research pricing points of various competitors and trial different business models",
//           description:"We know what we're planning to build for version one." +
//             " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
//           subtasks:[
//             {
//               checked:true,
//               name:"Research competitor pricing and business models",
//             },
//             {
//               checked:false,
//               name:"Outline a business model that works for our solution",
//             },
//             {
//               checked:false,
//               name:"Talk to potential customers about our proposed solution and ask for fair price expectancy",
//             }
//           ]
//
//         },
//       ]
//     },
//     {
//       name:"Roadmap",
//       id: 7,
//       items:[
//         {
//           type:"Done",
//           name:"dont get it",
//           description:"We know what we're planning to build for version one." +
//             " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
//           subtasks:[
//             {
//               checked:true,
//               name:"Research competitor pricing and business models",
//             },
//             {
//               checked:false,
//               name:"Outline a business model that works for our solution",
//             },
//             {
//               checked:false,
//               name:"Talk to potential customers about our proposed solution and ask for fair price expectancy",
//             }
//           ]
//
//         },
//       ]
//     },
//   ];
//
//
//   getBoardByName(name: string): BoardsServiceProps | undefined {
//     return this.boards.find((board:any) => board.name === name);
//   }
//
//   allType(name: string): string[] {
//     const board = this.getBoardByName(name);
//     return board ? Array.from(new Set(board.items.map(item => item.type))) : [];
//   }
//
//   getItems(name: string): items[] {
//     const board = this.getBoardByName(name);
//     return board ? board.items : [];
//   }
//
//   changeType(name: string, itemToUpdate: items, newType: string): void {
//     const board = this.getBoardByName(name);
//     if (board) {
//       const item = board.items.find(item => item.id === itemToUpdate.id);
//       if (item) {
//         item.type = newType;
//         console.log(`Item ${item.name} updated to type ${newType}`);
//         this.currentBoard.next(board); // Update the observable to reflect changes
//       }
//     }
//   }
//     getAllName(){
//     return this.boards.map((item:any)=>(item.name))
//   }
//   toggleSidebar(){
//     this.showBoard.next(!this.showBoard.value)
//   }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Items {
  type: string;
  name: string;
  id: number;
  description?: string;
  subtasks?: { checked: boolean; name: string }[];
}

export interface BoardsServiceProps {
  name: string;
  items: Items[];
}

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  showBoard = new BehaviorSubject<boolean>(true);
  route = new BehaviorSubject<string>("");
  currentBoard = new Subject<BoardsServiceProps>();

  boards:BoardsServiceProps[] = [
    {
      name:"Platform Launch",
      items:[
        {
          type:"Todo",
          id: 1,
          name:"Hello ghuys",
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
        {
          type:"Todo",
          id: 2,
          name:"Whats happening",
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
        {
          type:"Done",
          id: 3,
          name:"stil raining?",
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
        {
          type:"asfasf",
          id: 11,
          name:"stil raining?",
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
        {
          type:"Done",
          id: 3,
          name:"stil raining?",
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
        {
          type:"Dsfasfone",
          id: 3,
          name:"stil raining?",
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
        {
          type:"Dasfasfasfone",
          id: 3,
          name:"stil raining?",
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

        }, {
          type:"asfasfasfDone",
          id: 3,
          name:"stil raining?",
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
        {
          type:"Dasfasfasfone",
          id: 3,
          name:"stil raining?",
          description:"We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks:[
            {
              checked:false,
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
        {
          type:"Done",
          id: 4,
          name:"i dont know how",
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
        {
          type:"Example",
          id: 5,
          name:"maybe facebook",
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
          id: 6,
          name:"Research pricing points of various competitors and trial different business models",
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
          id: 7,
          name:"dont get it",
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
            },
          ]
        },
        {
          type:"For now",
          id: 8,
          name:"study for exams",
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
            },
          ]
        },
        {
          type:"Yesterday",
          id: 9,
          name:"other stuff",
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
            },
          ]
        },
      ]
    },
  ];

  getBoardByName(name: string): BoardsServiceProps | undefined {
    return this.boards.find(board => board.name === name);
  }

  allType(name: string): string[] {
    const board = this.getBoardByName(name);
    return board ? Array.from(new Set(board.items.map(item => item.type))) : [];
  }

  getItems(name: string): Items[] {
    const board = this.getBoardByName(name);
    return board ? board.items : [];
  }

  changeType(name: string, itemToUpdate: Items, newType: string): void {
    const board = this.getBoardByName(name);
    if (board) {
      const item = board.items.find(item => item.id === itemToUpdate.id);
      if (item) {
        item.type = newType;
        // this.boards =  this.boards.find(item=>item.name === name)
        this.currentBoard.next(board); // Update the observable to reflect changes
      }
    }
    console.log(board)
  }

  getAllName() {
    return this.boards.map(board => board.name);
  }

  toggleSidebar() {
    this.showBoard.next(!this.showBoard.value);
  }
}
