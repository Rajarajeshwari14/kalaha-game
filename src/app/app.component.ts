import { Component } from '@angular/core';
import { GameState } from './game-state';
import { Player } from './player';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kalaha Game';
  
  showPlayer1:boolean;
  showPlayer2:boolean;
  gameId:String;
  player1Name:String;
  player2Name:String;
  board:number[];
  gameStatus:String;
  message:String;
  gameState:GameState;
  
  
  constructor(private http: HttpClient){
    this.showPlayer1=false;
    this.showPlayer2=true;
    this.player1Name="Player 1";
    this.player2Name="Player 2";
    this.board=new Array(14);
        this.board[13]=0;
        this.board[12]=0;
        this.board[11]=0;
        this.board[10]=0;
        this.board[9]=0;
        this.board[8]=0;
        this.board[7]=0;
        this.board[6]=0;
        this.board[5]=0;
        this.board[4]=0;
        this.board[3]=0;
        this.board[2]=0;
        this.board[1]=0;
        this.board[0]=0;
  }



  delay(milliSeconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliSeconds) );
  }

  play(index:number){
    window.alert('You clicked '+index);
  }

  joinGame(){

  }

  instructions(){
    
  }

  newGame(){
    debugger;
    let httpOptions= {
      headers: new HttpHeaders({
         'Content-Type': 'application/json'
      })
  };
    
    let finalData={};
    
    this.http.post('http://localhost:8080/kalaha-api/v1/game',JSON.stringify({name:"Player 1"}), {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).subscribe(data=>{
      console.log(data);
    });
    console.log(finalData);
  }

} 
