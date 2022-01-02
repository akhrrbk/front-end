const inputOne = document.querySelector('#inputone')
const tosavetextone = document.querySelector('#paramone');
const tosavetexttwo = document.querySelector('#paramtwo');

inputOne.addEventListener('input', (e) => {
    console.log('input detected!');
    tosavetextone.innerHTML += `${e.data}` 
})

inputOne.addEventListener('change', (e) => {
    console.log('change detected!')
})