for (let i=0; i<256; i++) {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.classList.add('divs');
    container.append(div);
}

let divs = document.querySelectorAll('.divs');
console.log(divs);

divs.addEventListener('hover', () => {
    console.log(divs);
    divs.style.backgroundColor = 'green';
})

