import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  /* 
    ladoAzul: string; 0, 1, 2, 3, 4, 5, 6, 7, 8
    ladoVerde: string; 9, 10, 11, 12, 13, 14, 15, 16, 17
    ladoRojo: string; 18, 19, 20, 21, 22, 23, 24, 25, 26
    ladoNaranja: string; 27, 28, 29, 30, 31, 32, 33, 34, 35
    ladoNegro: string; 36, 37, 38, 39, 40, 41, 42, 43, 44, 45
    ladoBlanco: string; 46, 47, 48, 49, 50, 51, 52, 53, 54
  */
 solved: boolean = false;
    
 ngOnInit() {
      this.isSolved();
    }
    azul = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    verde = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    rojo = [18, 19, 20, 21, 22, 23, 24, 25, 26];
    naranja = [27, 28, 29, 30, 31, 32, 33, 34, 35];
    negro = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
    blanco = [46, 47, 48, 49, 50, 51, 52, 53, 54];

    cubo:number[][] = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8],//0
      [9, 10, 11, 12, 13, 14, 15, 16, 17],//1
      [18, 19, 20, 21, 22, 23, 24, 25, 26],//2
      [27, 28, 29, 30, 31, 32, 33, 34, 35],//3
      [36, 37, 38, 39, 40, 41, 42, 43, 44],//4
      [45, 46, 47, 48, 49, 50, 51, 52, 53]//5
    ];
    counter = 0;
    
    isSolved() {
      for (let index = 0; index < this.cubo.length; index++) {
        console.log(this.cubo[index]);
        for (let j = 0; j < this.cubo[index].length; j++) {    
          switch(this.counter)
          {
            case 0:
              if (this.cubo[index][j] >= 0 && this.cubo[index][j] <= 8) {
                this.solved = true;
              }else
                this.counter = this.counter + 1;

              break;
            case 1:
              if (this.cubo[index][j] >= 9 && this.cubo[index][j] <= 17) {
                this.solved = true;
              }else
               this.counter = this.counter + 1;
              
              break;
            case 2:
              if (this.cubo[index][j] >= 18 && this.cubo[index][j] <= 26) {
                this.solved = true;
              }else
                this.counter = this.counter + 1;
              
              break;
           case 3:
            if (this.cubo[index][j] >= 27 && this.cubo[index][j] <= 35) {
              this.solved = true;
            }else
              this.counter = this.counter + 1;
            
            break;
          case 4:
            if (this.cubo[index][j] >= 36 && this.cubo[index][j] <= 44) {
              this.solved = true;
            }else
             this.counter = this.counter + 1;
            
            break;
          case 5:
            if (this.cubo[index][j] >= 45 && this.cubo[index][j] <= 53) {
              this.solved = true;
            }else
              this.counter = this.counter + 1;
          
            break;
          }
          
        }
        this.counter++;
      }
      
      if (this.counter === 6) {
        console.log("Esta resuelto");
      }
    }


}
