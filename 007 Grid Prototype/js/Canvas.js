export default class Canvas {
    constructor () {
        this.display = document.getElementsByClassName("canvas")[0];
    }

    create = () => {
        return [this.display.getContext("2d"), this.display];
    }

    showSize = () => {
        return [this.display.width, this.display.height];
    }
}