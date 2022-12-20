const body = document.querySelector('body');

const gridWrapper = document.getElementById('grid-wrapper');

gridDimensions = parseInt(prompt());

for (let i = 0; i < (gridDimensions**2); i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    // box.style.padding = `1fr`
    gridWrapper.appendChild(box);
}



gridWrapper.style.cssText = 
`grid-template-columns:repeat(${gridDimensions}, minmax(0, 1fr));
grid-template-rows:repeat(${gridDimensions}, minmax(0, 1fr))`;

