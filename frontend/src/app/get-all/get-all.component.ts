import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {
  game:Game[];

  constructor (private ser:GameService) {
  }
  ngOnInit(): void {
  this.getAll();
  }

  getAll(){
    this.ser.getAll().subscribe((res)=>{
this.game=res;
    });
  }

}
