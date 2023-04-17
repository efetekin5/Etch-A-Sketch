createBoard(16);

function createBoard(size) {
    let container = document.querySelector('.container');

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i=0; i<size*size; i++) {
        let div = document.createElement('div');
        div.style.cssText = 'border: 1px solid black';
        div.classList.add('divs');
        div.addEventListener('mouseover', () => {
            div.style.cssText = 'background: black';
        })
        container.append(div);
    }
}


function getSize() {
    let input = prompt('Enter grid size');
    if (input < 0 || input > 100) {
       input = prompt('Enter a number between 1 and 100');
    }
    let divs = document.querySelectorAll('.divs');
    for (let x=0; x < divs.length; x++) {
        divs[x].style.cssText = 'border: 1px solid black; background: white;';
    }
    createBoard(input);
}
