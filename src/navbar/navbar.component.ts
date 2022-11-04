import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  id:any;
  drop(param:any){
    if(this.id == param){
      this.id = "";
    }
    else{
      this.id = param;
    }

  }

}
