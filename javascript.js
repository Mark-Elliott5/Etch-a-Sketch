const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'pink']
const rainbowButton = document.getElementById('rainbow-mode');
rainbowButton.addEventListener('change', () => {
    if (rainbowButton.checked == true) {
        randomButton.checked = false;
    }
})
const randomButton = document.getElementById('random-mode');
randomButton.addEventListener('change', () => {
    if (randomButton.checked == true) {
        rainbowButton.checked = false;
    }
})
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearGrid);
const slider = document.getElementById('dimension-slider');
slider.addEventListener('mouseup', createGrid);
const sliderOutput = document.getElementById('slider-value');
sliderOutput.textContent = `${slider.value} x ${slider.value}`;
slider.addEventListener('input', () => sliderOutput.textContent = `${slider.value} x ${slider.value}`);
const gridWrapper = document.getElementById('grid-wrapper');
gridWrapper.addEventListener('mousedown', () => clickHeldDown = true);
gridWrapper.addEventListener('mouseup', () => clickHeldDown = false);
let currentSelectedColor = 'black';
let clickHeldDown = false;
let colorPalette = document.getElementsByClassName('color-palette');
for (let i = 0; i < colorPalette.length; i++) {
    colorPalette[i].addEventListener('click', () => {
        currentSelectedColor = colorPalette[i].value;
        rainbowButton.checked = false;
        randomButton.checked = false;
    })
}
const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('change', () => currentSelectedColor = colorPicker.value)

function createGrid() {
    gridWrapper.replaceChildren();
    const gridDimensions = slider.value;
    for (let i = 0; i < (gridDimensions**2); i++) {
        let box = document.createElement('div');
        box.style.backgroundColor = `white`;
        // previousColor = box.style.backgroundColor;
        // box.addEventListener('mouseenter', () => {
        //     if (!(clickHeldDown)) {
        //         box.style.backgroundColor = `${currentSelectedColor}`;
        //     } else { return; }
        // });
        // box.addEventListener('mouseleave', () => {
        //     if (!(clickHeldDown)) {
        //         box.style.backgroundColor = `${previousColor}`;
        //     } else { return; }
        // });
        box.addEventListener('mouseover', () => {
            if (clickHeldDown) {
                if (rainbowButton.checked) {
                    box.style.backgroundColor = `${colors[(Math.floor(Math.random() * 8))]}`;
                } else if (randomButton.checked) {
                    box.style.backgroundColor = `rgb(${(Math.floor(Math.random() * 256))}, 
                    ${(Math.floor(Math.random() * 256))}, 
                    ${(Math.floor(Math.random() * 256))})`;
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
