import { Component } from "@angular/core";

export class SudokuComponent {
    sudoku:number[][] = [
        [5,3,4,6,7,2,1,9,8],
        [6,7,8,1,9,5,3,4,2],
        [9,1,2,3,4,8,5,6,7],
        [8,5,9,4,2,6,7,1,3],
        [7,6,1,8,5,3,9,2,4],
        [4,2,3,7,9,1,8,5,6],
        [9,6,1,2,8,7,3,4,5],
        [5,3,7,4,1,9,2,8,6],
        [2,8,4,6,3,5,1,7,9],
    ];

    isSolvedSudoku(){

        for (let i = 0; i < this.sudoku.length; i++) {
            for (let j = 0; j < this.sudoku[i].length; j++) {
                if (this.sudoku[i][j] > 1 && this.sudoku[i][j] < 9 ) {
                    
                }
            }
        }
    }




}