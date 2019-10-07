import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  public playerX = 3;
	public walkableTiles = '-=TtE';
  public gameOver = false;
  public tiles: Array<{ index: number, char: string }>;

  constructor() { 
    let s = 'x--------T------********-----E-x';
    this.tiles = []; 
    for (let i=0; i<s.length; i++) {
      this.tiles.push({ index: i, char: s[i] });
    }
  }

  public left() {
		let newX = this.playerX - 1;
		if (this.walkableTiles.indexOf(this.tiles[newX].char) != -1) {
      this.playerX = newX;
      if (this.tiles[this.playerX].char == 'E') this.gameOver = true;
		}
  }

  public right() {
		let newX = this.playerX + 1;
		if (this.walkableTiles.indexOf(this.tiles[newX].char) != -1) {
      this.playerX = newX;
      if (this.tiles[this.playerX].char == 'E') this.gameOver = true;
		}
  }

	public jump() {
		if (this.tiles[this.playerX].char == 'T') {
      this.tiles[this.playerX] = { index: this.playerX, char: 't' };
      for (let i=0; i<this.tiles.length; i++) {
        if (this.tiles[i].char == '*') this.tiles[i].char = '=';
      }
		}
  }
}
