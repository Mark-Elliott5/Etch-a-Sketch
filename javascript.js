const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.appendChild(wrapper);
gridDimensions = parseInt(prompt());

for (let i = 0; i < (gridDimensions**2); i++) {
    let div = document.createElement('div');
    div.classList.add('box');
    wrapper.appendChild(div);    
}

wrapper.style.cssText = 
`grid-template-columns:repeat(${gridDimensions}, 1fr);
grid-template-rows:repeat(${gridDimensions}, 1fr)`;

