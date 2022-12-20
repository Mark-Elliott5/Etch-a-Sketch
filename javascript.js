const body = document.querySelector('body');
const gridWrapper = document.getElementById('grid-wrapper');
const slider = document.getElementById('dimension-slider');
slider.addEventListener('mouseup', createGrid);
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearGrid);

function createGrid() {
    gridWrapper.replaceChildren();
    const gridDimensions = slider.value;
    for (let i = 0; i < (gridDimensions**2); i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('mouseover', () => box.classList.add('gridColor'));
        gridWrapper.appendChild(box);
    }
    gridWrapper.style.cssText = 
    `grid-template-columns:repeat(${gridDimensions}, minmax(0, 1fr));
    grid-template-rows:repeat(${gridDimensions}, minmax(0, 1fr))`;
}

function clearGrid() {
    const nodesToBeCleared = gridWrapper.children;
    for (let i = 0; i < nodesToBeCleared.length; i++) {
        nodesToBeCleared[i].classList.remove('gridColor');
        }
}

createGrid();
