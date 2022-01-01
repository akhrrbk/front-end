// const newImg = document.createElement('img');
// newImg.src = 'https://images.unsplash.com/photo-1641049320705-ace031552c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
// document.body.appendChild(newImg)

// const text = document.createElement('h1');
// text.innerHTML = 'this is h1';
// document.body.prepend(text);
// // document.body.append(text);

// const h1 = document.querySelector('h1')

// const text2 = document.createElement('h2');
// text2.innerHTML = 'salom shox, this is h2';

// h1.insertAdjacentElement('afterend', text2)


const container = document.querySelector('#container')

const button = []
for (let i = 0; i < 100; i++){
    button[i] = document.createElement('button');
    button[i].innerHTML = 'click me!'
    container.appendChild(button[i])
}
