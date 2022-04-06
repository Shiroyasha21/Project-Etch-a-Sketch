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
valueTextField.setAttribute('value', '16')
valueTextField.className = 'textField';
tools.append(valueTextField);

valueTextField.oninput = () => {
    if (valueTextField.value > 100) {
        valueTextField.value = 100;
    } else if (valueTextField.value.length > 3) {
        valueTextField.value = valueTextField.value.slice(0, 3);
    }
}

valueTextField.addEventListener('input', e => {
    universalValue = valueTextField.value;
    const updateSlider = () => {
        slider.value = valueTextField.value
    }
    updateSlider();
})

const slider = document.querySelector('.slider');

slider.addEventListener('input', e => {
    let value = slider.value;
    valueTextField.value = value;
})

const submitBtn = document.createElement('button');
submitBtn.textContent = 'Change Grid';
tools.append(submitBtn);


let universalValue = valueTextField.value;

let gridValue = universalValue;

//generating the grid using default and user input

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

gridMaker(gridValue);

submitBtn.addEventListener('click', e => {
    gridValue = slider.value;
    gridValue = valueTextField.value;
    removeGrid();
    gridMaker(gridValue);
})


function removeGrid() {
    document.querySelectorAll(".columnBox").forEach(e => e.remove());
}

//changing individual colors of divs

const cells = document.querySelectorAll('.rowBox');

cells.forEach(cell => {
    cell.addEventListener('click', function(e) {
        changeDivColor(e);
    })
})

function changeDivColor(e) {
    e.target.classList.add('mouseAction');
}


    




