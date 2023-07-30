let COLS = 10;
let ROWS = 20;
let BLOCK_SIZE = 30;
let COLOR_MAPPING = [
    'red',
    'orange',
    'green',
    'purple',
    'blue',
    'cyan',
    'yellow',
    'white',
];
let BRICK_LAYOUT = [
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
    ],
];
let WHITE_COLOR_ID = 7;
let canvas = document.getElementById('haha');
let ctx = canvas.getContext('2d');
class Board{
    constructor(ctx) {
        this.ctx = ctx;
        this.grid = this.generateWhiteBoard();
        this.gameOver = false;
        this.isPlaying = false;
    }
    generateWhiteBoard() {
        let arrGrid =[];
        for (let i = 0; i<ROWS; i++){
            let arr_element = [];
            for (let j = 0; j<COLS; j++){
                arr_element.push(WHITE_COLOR_ID);
            }
            arrGrid.push(arr_element);
        }
        return arrGrid;
    }
    drawCell(xAxis, yAxis, colorId) {
        this.ctx.fillStyle = COLOR_MAPPING[colorId] || COLOR_MAPPING[WHITE_COLOR_ID];
        this.ctx.fillRect(xAxis * BLOCK_SIZE, yAxis * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        this.ctx.fillStyle = 'black';
        this.ctx.strokeRect(xAxis * BLOCK_SIZE, yAxis * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    }
    drawBoard() {
        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid[0].length; col++) {
                this.drawCell(col, row, this.grid[row][col]);
            }
        }
    }
    handleGameOver(){
        this.gameOver = true;
        this.isPlaying = true;
        let sumWhile = 0;

        for (let i = 0; i<ROWS; i++){
            for (let j = 0; j<COLS; j++){
                if (this.grid[i][j] !== WHITE_COLOR_ID){
                    sumWhile += 1;
                }
            }
        }
        let percent = Math.round((sumWhile/200)*100);
        document.getElementById('finish').innerText = `Bạn đã tô được ${percent}%, cố gắng thêm nhé`;
    }
    reset() {
        // this.score = 0;
        this.grid = this.generateWhiteBoard();
        this.gameOver = false;
        this.drawBoard();
    }
}

class Brick{
    constructor(id) {
        this.id = id;
        this.layout = BRICK_LAYOUT[id];
        this.activeIndex = 0;
        this.colPos = 3;
        this.rowPos = -2;
    }

    //hàm vẽ từng viên gạch
    draw(){
        for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
            for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
                if (this.layout[this.activeIndex][row][col] !== WHITE_COLOR_ID) {
                    board.drawCell(col + this.colPos, row + this.rowPos, this.id);
                }
            }
        }
    }

    //tạo hàm xoá brick cũ để vẽ brick mới
    clear() {
        for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
            for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
                if (this.layout[this.activeIndex][row][col] !== WHITE_COLOR_ID) {
                    board.drawCell(col + this.colPos, row + this.rowPos, WHITE_COLOR_ID);
                }
            }
        }
    }
    moveLeft(){
        if (!this.checkCollision(this.rowPos, this.colPos - 1, this.layout[this.activeIndex])){
            this.clear();
            this.colPos--;
            this.draw();
        }

    }
    moveRight(){
        if (!this.checkCollision(this.rowPos, this.colPos + 1, this.layout[this.activeIndex])) {
            this.clear();
            this.colPos++;
            this.draw();
        }
    }

    moveDown(){
        if (!this.checkCollision(this.rowPos + 1, this.colPos, this.layout[this.activeIndex])) {
            this.clear();
            this.rowPos++;
            this.draw();
        } else {
            this.handleLanded();
            generateNewBrick();
        }
    }

    //phương thức xoay brick
    rotate(){
        if (!this.checkCollision(this.rowPos, this.colPos, this.layout[(this.activeIndex+1)%4])) {
            this.clear();
            this.activeIndex = (this.activeIndex + 1) % 4;
            this.draw();
        }
    }

    //Kiểm tra va chạm 4 chiều + va chạm viên đã rơi trước + điều kiện xoay
    checkCollision(nextRow, nextCol, nextLayout) {
        for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
            for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
                if (nextLayout[row][col] !== WHITE_COLOR_ID && nextRow >= 0) {
                    if ((col + nextCol < 0) || (col + nextCol >= COLS) || (row + nextRow >= ROWS) || board.grid[row + nextRow][col + nextCol] !== WHITE_COLOR_ID) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    //xử lý khi viên gạch hạ xuống;
    handleLanded() {
        if (this.rowPos <= 0){
            board.handleGameOver();
            return;
        }
        for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
            for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
                if (this.layout[this.activeIndex][row][col] !== WHITE_COLOR_ID) {
                    board.grid[row + this.rowPos][col + this.colPos] = this.id;
                }
            }
        }
        board.drawBoard();
    }
}
function generateNewBrick() {
    brick = new Brick(Math.floor(Math.random() * 10) % BRICK_LAYOUT.length);
}

board = new Board(ctx);
board.drawBoard();

function start(){
    board.reset();
    board.isPlaying = true;
    generateNewBrick();
    document.getElementById('finish').innerHTML = '';
    let a = setInterval(()=>{
        if (!board.gameOver){
            brick.moveDown();
        } else {
            clearInterval(a)
        }

    },1000)
}
window.addEventListener('keydown',(evt)=>{
    if (!board.gameOver && board.isPlaying){
        switch (evt.key){
            case 'ArrowRight':
                brick.moveRight();
                break;
            case 'ArrowLeft':
                brick.moveLeft();
                break;
            case 'ArrowDown':
                brick.moveDown()
                break;
            case 'ArrowUp':
                brick.rotate()
                break;
        }
    }
})