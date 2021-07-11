export default class Box {
    constructor(ctx, index, x, y, width, height) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.index = index;
        this.textFont = `${width / 8}px serif`;
        this.closeFont = `${width / 10}px serif`;
        this.midpoint = [Math.floor(this.width / 2), Math.floor(this.height / 2)];
    }

    drawFilled = (color = "00ff00") => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    drawOutline = (color = "#FF0000") => {  
        this.ctx.strokeStyle = color;
        this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    drawBox = () => {
        this.drawOutline();
        this.drawText();
        this.drawClose();
    }

    drawText = () => {
        this.ctx.font = this.textFont;
        this.ctx.fillText(`item ${this.index + 1}`, this.midpoint[0]+this.x - this.midpoint[0]/3 , this.midpoint[1] + this.y + this.midpoint[1]/6);
    }

    drawClose = () => {
        this.ctx.font = this.closeFont;
        // console.log(Math.floor(this.width), Math.floor(this.y), Math.floor(this.x));
        // this.ctx.fillText('x', (this.midpoint[0]), this.y); 
        // console.log('x', this.y + this.height); 
    }
}