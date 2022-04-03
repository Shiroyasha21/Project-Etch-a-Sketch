const project = document.querySelector('project');
const projectContainer = document.querySelector('#projectContainer');
const tools = document.querySelector('#tools');

const canvas = document.createElement('div');
canvas.setAttribute('id', 'canvas');
projectContainer.append(canvas);

const valueTextField = document.createElement('input');
valueTextField.setAttribute('type', 'number');
valueTextField.setAttribute('min', '1');
valueTextField.setAttribute('max', '100');
valueTextField.setAttribute('value', '16');
valueTextField.className = 'textField';
tools.append(valueTextField);


let gridValue = valueTextField.value;

function gridMaker(gridValue) {
    for (i = 0; i < gridValue; i++)     {
        const column = document.createElement('div');
        column.className = 'columnBox';
        canvas.append(column);
        for (j = 0; j < gridValue; j++) {
            const row = document.createElement('div');
            row.className = 'rowBox';
            column.append(row);
        }
    }
}

// valueTextField.addEventListener('keydown', registerValueEntered);

// function registerValueEntered(event) {
//     if (event.which === 13) {
//         valueRegister();
//     }
// }


gridMaker(gridValue);


valueTextField.oninput = () => {
    if (valueTextField.value > 100) {
        valueTextField.value = 100;
    } else if (valueTextField.value.length > 3) {
        valueTextField.value = valueTextField.value.slice(0, 3);
    }
}







var eraser = document.getElementById('erasure');
let elementSketch = document.getElementById('canvas');

eraser.addEventListener('click', e => {
    elementSketch.remove();
})



