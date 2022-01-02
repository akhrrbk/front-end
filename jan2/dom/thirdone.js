const productinput = document.querySelector('#product');
const numberinput = document.querySelector('#qty');
const form = document.querySelector('form');
const ullist = document.querySelector('#list');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newValueOne = productinput.value;
    const newValueTwo = numberinput.value;
    const newLi = document.createElement('li');
    
    newLi.innerHTML = `${newValueTwo} ${newValueOne}`;
    ullist.append(newLi);
    console.log(`${newValueTwo} ${newValueOne} has been added`)
})

ullist.addEventListener('click', (e) => {
    e.target.remove();
    console.log(`${e.target.innerHTML} has been removed`)
})