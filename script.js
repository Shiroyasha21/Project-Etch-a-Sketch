const project = document.querySelector('project');
const projectContainer = document.querySelector('#projectContainer');

const canvas = document.createElement('div');
canvas.className = 'canvas';
projectContainer.append(canvas);


function gridMaker(col, row) {
    for (i = 0; i < col; i++)     {
        const column = document.createElement('div');
        column.className = 'columnBox';
        canvas.append(column);
        for (j = 0; j < row; j++) {
            const row = document.createElement('div');
            row.className = 'rowBox';
            column.append(row);
        }
    }
}

gridMaker(3, 3);

var eraser = document.getElementById('#erasure');
let elementSketch = document.querySelector('canvas');

console.log(eraser);
console.log(elementSketch);