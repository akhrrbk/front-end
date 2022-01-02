const h1 = document.querySelector('h1');

const ourbutton = document.querySelector('#colorchanger');
ourbutton.addEventListener('click', () => {
    const color = NewColor();
    document.body.style.backgroundColor = color;
    h1.innerHTML = color;
})

const NewColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r}, ${g}, ${b})`;
}