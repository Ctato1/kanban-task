import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Router} from "@angular/router";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

export interface Items {
  type: string;
  name: string;
  id: number;
  description?: string;
  subtasks?: { checked: boolean; name: string }[];
}

export interface BoardsServiceProps {
  name: string;
  id: number;
  items: Items[];
}

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  showBoard = new BehaviorSubject<boolean>(true);
  route = new BehaviorSubject<string>("");
  currentBoard = new Subject<BoardsServiceProps[]>();

  constructor(private router: Router) {
  }

  boards: BoardsServiceProps[] = [
    {
      name: "Platform Launch",
      id: 1,
      items: [
        {
          type: "Todo",
          id: 1,
          name: "Hello ghuys",
          description: "We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks: [
            {
              checked: true,
              name: "Research competitor pricing and business models",
            },
            {
              checked: false,
              name: "Outline a business model that works for our solution",
            },
            {
              checked: false,
              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            }
          ]
        },
        {
          type: "Todo",
          id: 2,
          name: "Whats happening",
          description: "We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks: [
            {
              checked: true,
              name: "Research competitor pricing and business models",
            },
            {
              checked: false,
              name: "Outline a business model that works for our solution",
            },
            {
              checked: false,
              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            }
          ]
        },
        {
          type: "Done",
          id: 3,
          name: "stil raining?",
          description: "We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks: [
            {
              checked: true,
              name: "Research competitor pricing and business models",
            },
            {
              checked: false,
              name: "Outline a business model that works for our solution",
            },
            {
              checked: false,
              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            }
          ]

        },
        {
          type: "asfasf",
          id: 11,
          name: "stil raining?",
          description: "We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks: [
            {
              checked: true,
              name: "Research competitor pricing and business models",
            },
            {
              checked: false,
              name: "Outline a business model that works for our solution",
            },
            {
              checked: false,
              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            }
          ]

        },
        {
          type: "Done",
          id: 4,
          name: "stil raining?",
          description: "We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks: [
            {
              checked: true,
              name: "Research competitor pricing and business models",
            },
            {
              checked: false,
              name: "Outline a business model that works for our solution",
            },
            {
              checked: false,
              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            }
          ]

        },
        {
          type: "Dsfasfone",
          id: 5,
          name: "stil raining?",
          description: "We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks: [
            {
              checked: true,
              name: "Research competitor pricing and business models",
            },
            {
              checked: false,
              name: "Outline a business model that works for our solution",
            },
            {
              checked: false,
              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            }
          ]

        },
        {
          type: "Dasfasfasfone",
          id: 6,
          name: "stil raining?",
          description: "We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks: [
            {
              checked: true,
              name: "Research competitor pricing and business models",
            },
            {
              checked: false,
              name: "Outline a business model that works for our solution",
            },
            {
              checked: false,
              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            }
          ]

        }, {
          type: "asfasfasfDone",
          id: 7,
          name: "stil raining?",
          description: "We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks: [
            {
              checked: true,
              name: "Research competitor pricing and business models",
            },
            {
              checked: false,
              name: "Outline a business model that works for our solution",
            },
            {
              checked: false,
              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            }
          ]

        },
        {
          type: "Dasfasfasfone",
          id: 8,
          name: "stil raining?",
          description: "We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks: [
            {
              checked: false,
              name: "Research competitor pricing and business models",
            },
            {
              checked: false,
              name: "Outline a business model that works for our solution",
            },
            {
              checked: false,
              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            }
          ]

        },
        {
          type: "Done",
          id: 9,
          name: "i dont know how",
          description: "We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks: [
            {
              checked: true,
              name: "Research competitor pricing and business models",
            },
            {
              checked: false,
              name: "Outline a business model that works for our solution",
            },
            {
              checked: false,
              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            }
          ]

        },
        {
          type: "Example",
          id: 10,
          name: "maybe facebook",
          description: "We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks: [
            {
              checked: true,
              name: "Research competitor pricing and business models",
            },
            {
              checked: false,
              name: "Outline a business model that works for our solution",
            },
            {
              checked: false,
              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            }
          ]

        },
      ]
    },
    {
      name: "Marketing Plan",
      id: 2,
      items: [
        {
          type: "Doing",
          id: 6,
          name: "Research pricing points of various competitors and trial different business models",
          description: "We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks: [
            {
              checked: true,
              name: "Research competitor pricing and business models",
            },
            {
              checked: false,
              name: "Outline a business model that works for our solution",
            },
            {
              checked: false,
              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            }
          ]

        },
      ]
    },
    {
      name: "Roadmap",
      id: 3,
      items: [
        {
          type: "Done",
          id: 7,
          name: "dont get it",
          description: "We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks: [
            {
              checked: true,
              name: "Research competitor pricing and business models",
            },
            {
              checked: false,
              name: "Outline a business model that works for our solution",
            },
            {
              checked: false,
              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            },
          ]
        },
        {
          type: "For now",
          id: 8,
          name: "study for exams",
          description: "We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks: [
            {
              checked: true,
              name: "Research competitor pricing and business models",
            },
            {
              checked: false,
              name: "Outline a business model that works for our solution",
            },
            {
              checked: false,
              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            },
          ]
        },
        {
          type: "Yesterday",
          id: 9,
          name: "other stuff",
          description: "We know what we're planning to build for version one." +
            " Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          subtasks: [
            {
              checked: true,
              name: "Research competitor pricing and business models",
            },
            {
              checked: false,
              name: "Outline a business model that works for our solution",
            },
            {
              checked: false,
              name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            },
          ]
        },
      ]
    },
  ];

  deleteBoardByName(name: string) {
    const changedBoard: BoardsServiceProps[] = this.boards.filter(item => item.name !== name)
    this.boards = changedBoard.slice();
    // change board
    this.currentBoard.next(changedBoard);
    //change name of route
    this.route.next("kanban");
    // navigate starting point
    this.router.navigate(['kanban']);
    console.log(this.boards)
  }

  getBoardByName(name: string): BoardsServiceProps | undefined {
    return this.boards.find(board => board.name === name);
  }

  editBoard(id: number | undefined) {
    return this.boards.filter(item => item.id === id);
  }

  changeBoard(id: number, newBoard: any) {
    let changedBoard = this.boards.filter(item => item.id !== id)[0] = newBoard
    console.log(changedBoard)
    this.currentBoard.next(Array.from(changedBoard));
    // this.boards = x.slice();
    // this.currentBoard.next(this.boards);
  }


  allType(name: string): string[] {
    const board = this.getBoardByName(name);
    return board ? Array.from(new Set(board.items.map(item => item.type))) : [];
  }

  getItems(name: string): Items[] {
    const board = this.getBoardByName(name);
    return board ? board.items : [];
  }

  // changeType(name: string, itemToUpdate: Items, newType: string): void {
  //   const board = this.getBoardByName(name);
  //   if (board) {
  //     const item = board.items.find(item => item.id === itemToUpdate.id);
  //     if (item) {
  //       item.type = newType;
  //       // this.boards =  this.boards.find(item=>item.name === name)
  //       this.currentBoard.next(board); // Update the observable to reflect changes
  //     }
  //   }
  //   console.log(board)
  // }

  getAllName() {
    return this.boards.map(board => board.name);
  }

  toggleSidebar() {
    this.showBoard.next(!this.showBoard.value);
  }
}
