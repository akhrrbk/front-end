// const mybutton = document.querySelector('button')
// mybutton.addEventListener('click', (evt) => {
//     console.log(evt)
// })

// const input = document.querySelector('input');

// // input.addEventListener('keyup', function(){
// //     console.log('keyup');
// // })

// input.addEventListener('keydown', function(e){
//     console.log(e.key);
// })

const form = document.querySelector('#shelterForm');
const catzName = document.querySelector('#catName');
const catz = document.querySelector('#catz');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newCatName = catzName.value;
    const newLi = document.createElement('LI');
    newLi.innerHTML = newCatName;
    catz.append(newLi);
})