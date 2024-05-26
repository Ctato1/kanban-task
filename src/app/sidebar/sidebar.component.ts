import {Component,OnInit} from '@angular/core';
import {BoardsService} from "../../shared/boards.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  boards!: string[];
  currentBoard!:string;
  isDark!:boolean;

  constructor(private boardsService: BoardsService,private router:Router) {
  }

  ngOnInit() {
    this.boards = this.boardsService.getAllName();
    this.boardsService.route.subscribe(name=>{
      this.currentBoard = name;
    })
  }
  navigateRouter(name:string){
      this.router.navigate([`kanban/${name}`])
      // this.boardsService.route.next(name);
  }
  toggleTheme(){
   this.isDark = !this.isDark;
   if(this.isDark){
     document.documentElement.setAttribute('data-theme', 'dark');
   }else{
     document.documentElement.setAttribute('data-theme', 'light');
   }
  }
  toggleSidebar(){
    this.boardsService.toggleSidebar();

  }
}
