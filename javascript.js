const gridWrapper = document.getElementById('grid-wrapper');

const slider = document.getElementById('dimension-slider');
slider.addEventListener('mouseup', createGrid);

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearGrid);

let clickHeldDown = false;
gridWrapper.addEventListener('mousedown', () => clickHeldDown = true);
gridWrapper.addEventListener('mouseup', () => clickHeldDown = false);

// const eraseButton = document.getElementById('erase');
// eraseButton.addEventListener('click', () => );

// const rainbowButton = document.getElementById('rainbow');
// rainbowButton = document.addEventListener('change', rainbow);

// function rainbow() {
//     // const gridColorRule = document.styleSheets[0].cssRules.cssText;
//     const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'pink']
//     for (let i = 0; i < (document.styleSheets[0].cssRules.length); i++) {
//         if (document.styleSheets[0].cssRules[i].selectorText == '.gridColor') {
//             // document.styleSheets[0].cssRules[i].cssText = `.gridColor { background-color = ${color}`
//             var gridColorRule = document.styleSheets[0].cssRules[i].cssText;
//             break;
//         }
//     }
//     while (rainbowButton.checked) {
//         run random color getter function;
//         gridColorRule = random color;
//         return;
//     }
// }

function createGrid() {
    gridWrapper.replaceChildren();
    const gridDimensions = slider.value;
    for (let i = 0; i < (gridDimensions**2); i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('mouseover', () => {
            if (clickHeldDown) {
                box.classList.add('grid-color');
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
        nodesToBeCleared[i].classList.remove('grid-color');
        }
}

createGrid();
