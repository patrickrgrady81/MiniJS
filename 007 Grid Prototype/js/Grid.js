import Box from './Box.js';

export default class Grid {
    constructor(ctx, display, rows, cols, carryOver = 0) {
        this.display = display;
        this.ctx = ctx;
        this.rows = rows;
        this.cols = cols;
        this.grid = [];
        this.margin = 10;
        this.startX = 10;
        this.startY = 10;
        this.width = this.display.width;
        this.height = this.display.clientHeight;
        this.rowBoxWidth = 0;
        this.colBoxHeight = 0;
        this.carryover = 1;
    }

    // get how many boxes I will need
    create = () => {
        this.recalculate()
        this.ctx.clearRect(0, 0, this.display.width, this.display.height);
        let index = 0;
        let i;

            for(i = 0; i < this.rows; i++) {
                this.grid[i] = [];
                for(let j = 0; j < this.cols; j++) {
                    let box = new Box(this.ctx, index, this.startX, this.startY, this.rowBoxWidth, this.colBoxHeight);
                    this.grid[i][j] = box;
                    index++;
                    this.startX += this.rowBoxWidth;
                }
                this.startX = this.margin;
                this.startY += this.colBoxHeight
            }         

        return this;
    }

    draw = () => {
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                this.grid[i][j].drawBox();
            }
        }
    }

    addBox = () => {
        this.carryOver++;
        if (this.carryOver > this.cols){
            this.carryOver %= this.cols;
            this.rows++;
        }
        this.create();  
        this.draw();
    }

    removeBox = () => {
        console.log('removing box...');
    }

    recalculate = () => {
        this.rowBoxWidth = ((this.width - 10) / this.cols);
        this.colBoxHeight = ((this.height + 80) / this.rows);
    }
}