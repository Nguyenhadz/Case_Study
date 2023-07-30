let array_Color = [
    'red',
    'blue',
    'orange',
    'green',
    'purple',
    'cyan',
    'yellow',
    'white',
];
let brick;
let brickShape = [
    [
        [
            [1, 7, 7],
            [1, 1, 1],
            [7, 7, 7],
        ],
        [
            [7, 1, 1],
            [7, 1, 7],
            [7, 1, 7],
        ],
        [
            [7, 7, 7],
            [1, 1, 1],
            [7, 7, 1],
        ],
        [
            [7, 1, 7],
            [7, 1, 7],
            [1, 1, 7],
        ]
    ],
    [
        [
            [7, 1, 7],
            [7, 1, 7],
            [7, 1, 1],
        ],
        [
            [7, 7, 7],
            [1, 1, 1],
            [1, 7, 7],
        ],
        [
            [1, 1, 7],
            [7, 1, 7],
            [7, 1, 7],
        ],
        [
            [7, 7, 1],
            [1, 1, 1],
            [7, 7, 7],
        ]
    ],
    [
        [
            [1, 7, 7],
            [1, 1, 7],
            [7, 1, 7],
        ],
        [
            [7, 1, 1],
            [1, 1, 7],
            [7, 7, 7],
        ],
        [
            [7, 1, 7],
            [7, 1, 1],
            [7, 7, 1],
        ],
        [
            [7, 7, 7],
            [7, 1, 1],
            [1, 1, 7],
        ]
    ],
    [
        [
            [7, 1, 7],
            [1, 1, 7],
            [1, 7, 7],
        ],
        [
            [1, 1, 7],
            [7, 1, 1],
            [7, 7, 7],
        ],
        [
            [7, 7, 1],
            [7, 1, 1],
            [7, 1, 7],
        ],
        [
            [7, 7, 7],
            [1, 1, 7],
            [7, 1, 1],
        ]
    ],
    [
        [
            [7, 7, 7, 7],
            [1, 1, 1, 1],
            [7, 7, 7, 7],
            [7, 7, 7, 7],
        ],
        [
            [7, 7, 1, 7],
            [7, 7, 1, 7],
            [7, 7, 1, 7],
            [7, 7, 1, 7],
        ],
        [
            [7, 7, 7, 7],
            [7, 7, 7, 7],
            [1, 1, 1, 1],
            [7, 7, 7, 7],
        ],
        [
            [7, 1, 7, 7],
            [7, 1, 7, 7],
            [7, 1, 7, 7],
            [7, 1, 7, 7],
        ]
    ],
    [
        [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
        ],
        [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
        ],
        [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
        ],
        [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
        ]
    ],
    [
        [
            [7, 1, 7],
            [1, 1, 1],
            [7, 7, 7],
        ],
        [
            [7, 1, 7],
            [7, 1, 1],
            [7, 1, 7],
        ],
        [
            [7, 7, 7],
            [1, 1, 1],
            [7, 1, 7],
        ],
        [
            [7, 1, 7],
            [1, 1, 7],
            [7, 1, 7],
        ]
    ],
];
let COL = 10;
let ROW = 20;
let white_color_id = 7;
let size_block = 30;
let canvas = document.getElementById('haha');
let ctx = canvas.getContext('2d');
class Board{
    constructor() {
        this.ctx = ctx;
        this.grid = this.getGrid();
    }
    getGrid(){
        let arrGrid =[];
        for (let i = 0; i<ROW; i++){
            let arr_element = [];
            for (let j = 0; j<COL; j++){
                arr_element.push(white_color_id);
            }
           arrGrid.push(arr_element);
        }
        return arrGrid;
    }


    drawCell(xCell,yCell, idColor){
        this.ctx.fillStyle = array_Color[idColor] || array_Color[white_color_id];
        this.ctx.fillRect(xCell*size_block, yCell*size_block, size_block, size_block);
        this.ctx.fillStyle = 'black';
        this.ctx.strokeRect(xCell*size_block, yCell*size_block, size_block, size_block);
    }
    drawBoard(){
        for (let i=0; i<this.grid.length; i++){
            for ( let j = 0; j<this.grid[0].length; j++){
                board.drawCell(j,i,this.grid[i][j]);
            }
        }
    }
}
class  Brick {
    constructor(id) {
        this.id = id;
        this.brickShape = brickShape[id];
        this.indexBrickShape = 0;
        this.colStart = 3;
        this.rowStart = 0;
    }
    drawBrick(){
        for (let i = 0; i < this.brickShape[this.indexBrickShape].length; i++){
            for (let j = 0; j< this.brickShape[this.indexBrickShape][0].length; j++){
                if (this.brickShape[this.indexBrickShape][i][j] === 1){
                    board.drawCell(j + this.colStart, i + this.rowStart, this.id)
                }
            }
        }
    }
    clear(){
        for (let i = 0; i < this.brickShape[this.indexBrickShape].length; i++){
            for (let j = 0; j< this.brickShape[this.indexBrickShape][0].length; j++){
                if (this.brickShape[this.indexBrickShape][i][j] === 1){
                    board.drawCell(j + this.colStart, i + this.rowStart, white_color_id)
                }
            }
        }
    }
    moveLeft(){
        if (this.checkVarLeft()){
            this.clear();
            this.colStart--;
            this.drawBrick()
        }
    }
    moveRight(){
        if (this.checkVarRight()) {
            this.clear();
            this.colStart++;
            this.drawBrick();
        }
    }
    moveDown(){
        if (this.checkVarDown()){
            this.clear();
            this.rowStart++;
            this.drawBrick();
        }



        // randomNewBreak();
        // brick.drawBrick();
    }
    rotateBrick(){
        if (this.checkRotate()){
            this.clear();
            this.indexBrickShape = (this.indexBrickShape+1)%4;
            this.drawBrick();
        }
    }
    checkVarLeft(){
        let flag = true;
        for (let i = 0; i < this.brickShape[this.indexBrickShape].length; i++){
            for (let j = 0; j< this.brickShape[this.indexBrickShape][0].length; j++){
                if (this.brickShape[this.indexBrickShape][i][j] === 1){
                    if ((j+this.colStart)*size_block<= 0) {
                        flag = false;
                    }
                }
            }
        }
        return flag;
    }
    checkVarRight(){
        let flag = true;
        for (let i = 0; i < this.brickShape[this.indexBrickShape].length; i++){
            for (let j = 0; j< this.brickShape[this.indexBrickShape][0].length; j++){
                if (this.brickShape[this.indexBrickShape][i][j] === 1){
                    if ((j+this.colStart)*size_block+size_block>=300) {
                        flag = false;
                    }
                }
            }
        }
        return flag;
    }
    checkVarDown(){
        let flag = true;
        for (let i = 0; i < this.brickShape[this.indexBrickShape].length; i++){
            for (let j = 0; j< this.brickShape[this.indexBrickShape][0].length; j++){
                if (this.brickShape[this.indexBrickShape][i][j] === 1){
                    if ((i+this.rowStart+1)*size_block>=600) {
                        flag = false;
                    }
                }
            }
        }
        return flag;
    }
    checkRotate(){
        let flag = true;
        for (let i = 0; i < this.brickShape[(this.indexBrickShape+1)%4].length; i++){
            for (let j = 0; j< this.brickShape[(this.indexBrickShape+1)%4][0].length; j++){
                if (this.brickShape[(this.indexBrickShape + 1)%4][i][j] === 1){
                    if ((j+this.colStart)*size_block< 0 || (j+this.colStart)*size_block+ size_block>300 || (i+this.rowStart+1)*size_block>600) {
                        flag = false;
                    }
                }
            }
        }
        return flag;
    }
    // finishBrick(){
    //     for (let i = 0; i < this.brickShape[this.indexBrickShape].length; i++){
    //         for (let j = 0; j< this.brickShape[this.indexBrickShape][0].length; j++){
    //             if (this.brickShape[this.indexBrickShape][i][j] !== 7){
    //                 board.grid[i + this.rowStart][j + this.colStart] = this.id;
    //             }
    //         }
    //     }
    //     board.drawBoard();
    // }
    moveBrick(){
        window.addEventListener('keydown', (evt)=> {
            switch (evt.key){
                case 'ArrowRight':
                    this.moveRight();
                    break;
                case 'ArrowLeft':
                    this.moveLeft();
                    break;
                case 'ArrowDown':
                    this.moveDown()
                    break;
                case 'ArrowUp':
                    this.rotateBrick()
                    break;
            }
        })
    }
}
function randomNewBreak(){
     brick = new Brick(Math.floor(Math.random()*8)%7);
}
setInterval(() => {
    brick.moveDown();
    }, 1000);

board = new Board();
board.drawBoard();
randomNewBreak();
// brick.drawBrick();
brick.moveBrick();

