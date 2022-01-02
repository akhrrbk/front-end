const mybutton = document.querySelector('#button1');

mybutton.onclick = function(){
    console.log("clicked")
}

function scream(){
    console.log('I miss you Jiyoung')
}

mybutton.onmouseenter = scream();

document.querySelector('h1').onclick = () => {
    console.log('you clicked h1')
}

// const button2 = document.querySelector('#button2');
// button2.addEventListener('dblclick', function(){
//     alert("you double clicked button2")
// })

const button2 = document.querySelector('#button2');
button2.addEventListener('dblclick', scream)