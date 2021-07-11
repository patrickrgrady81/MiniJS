import Canvas from './Canvas.js';
import Grid from './Grid.js';

const createDropDown = (type)=>{
    for (let i = 1; i <= 20; i++){
        let option = document.createElement("option");
        option.text = i.toString();
        option.value = i;
        if (i === 3) option.selected = true;
        type.appendChild(option);
    }

}

const start = () => {
        
    let [ctx, display] = new Canvas().create();

    display.addEventListener('click', (e) => {
        console.log(e.offsetX, e.offsetY);
    });

    let rowsElement = document.querySelector('#rows');
    let colsElement = document.querySelector('#columns');
    let auto = document.querySelector('#auto');

    createDropDown(rowsElement);
    createDropDown(colsElement);
    
    let rows = parseInt(rowsElement.value);
    let cols = parseInt(colsElement.value);

    let xGrid = new Grid(ctx, display, rows, cols).create();

    xGrid.draw();

    // handle input onChanges
    const handleColChange = (e) => {
        e.preventDefault();
        let rows = parseInt(rowsElement.value);
        let cols = parseInt(colsElement.value);
        if (auto.checked) {
            xGrid = new Grid(ctx, display, rows, cols).create();
            xGrid.draw(); 
        }
    }

    let colChange = document.querySelector('#columns');
    colChange.addEventListener('change', handleColChange)

    const handleRowChange = (e) => {
        e.preventDefault();
        let rows = parseInt(rowsElement.value);
        let cols = parseInt(colsElement.value);
        if (auto.checked) {
            xGrid = new Grid(ctx, display, rows, cols).create();
            xGrid.draw(); 
        }
    }

    let rowChange = document.querySelector('#rows');
    rowChange.addEventListener('change', handleRowChange)

    // handle clicks
    const createClicked = (e) => {
        e.preventDefault();
        let rows = parseInt(rowsElement.value);
        let cols = parseInt(colsElement.value);
        xGrid = new Grid(ctx, display, rows, cols).create(); 
        xGrid.draw();
    }

    let createButton = document.querySelector('#createButton');
    createButton.addEventListener('click', createClicked)

    const addClicked = (e) => {
        e.preventDefault();
        console.log(xGrid);
        xGrid.addBox();
    }

    let addButton = document.querySelector('#addButton');
    addButton.addEventListener('click', addClicked);
}

window.onload = start();