function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

const container = document.querySelector('.container')
const containerForButtons = document.createElement('div');
document.body.appendChild(containerForButtons)
setGrid(16)

function setGrid(size) {

    for (i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.style.width = `${(500 / size)}px`;
        div.style.height = `${(500 / size)}px`;
        div.classList.add('item');
        container.appendChild(div);
        
        div.addEventListener('mouseover', function(e) {
        e.target.style.background = getRandomColor();

        btn.addEventListener('click', () => div.style.background = "white");
        })
    }
};

function removePrevious() {
    while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

const btn = document.createElement('button');
btn.textContent = "Remove";
btn.classList.add('button')
containerForButtons.appendChild(btn);

const newBtn = document.createElement('button');
newBtn.textContent = "Change size";
newBtn.classList.add('button');
containerForButtons.appendChild(newBtn);

newBtn.addEventListener('click', function() {
    let size = prompt('Enter the number of squares per line:')
    removePrevious()
    setGrid(size);
})