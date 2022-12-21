const gridWrapper = document.getElementById('grid-wrapper');

const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'pink']

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearGrid);

const slider = document.getElementById('dimension-slider');
slider.addEventListener('mouseup', createGrid);

let clickHeldDown = false;
gridWrapper.addEventListener('mousedown', () => clickHeldDown = true);
gridWrapper.addEventListener('mouseup', () => clickHeldDown = false);

const rainbowButton = document.getElementById('rainbow');

let currentSelectedColor = 'black';

let colorPicker = document.getElementsByClassName('color-picker');
for (let i = 0; i < colorPicker.length; i++) {
    colorPicker[i].addEventListener('click', () => currentSelectedColor = colorPicker[i].value)
}

function createGrid() {
    gridWrapper.replaceChildren();
    const gridDimensions = slider.value;
    for (let i = 0; i < (gridDimensions**2); i++) {
        let box = document.createElement('div');
        box.style.backgroundColor = `white`;
        box.addEventListener('mouseover', () => {
            if (clickHeldDown) {
                if (rainbowButton.checked) {
                    box.style.backgroundColor = `${colors[(Math.floor(Math.random() * 8))]}`;
                } else {
                    box.style.backgroundColor = `${currentSelectedColor}`;
                }
            } else { 
                return; 
            }
        })
        gridWrapper.appendChild(box);
    }
    gridWrapper.style.cssText = 
    `grid-template-columns:repeat(${gridDimensions}, minmax(0, 1fr));
    grid-template-rows:repeat(${gridDimensions}, minmax(0, 1fr))`;
}

function clearGrid() {
    const nodesToBeCleared = gridWrapper.children;
    for (let i = 0; i < nodesToBeCleared.length; i++) {
        nodesToBeCleared[i].style.backgroundColor = 'white';
        }
}

createGrid();
