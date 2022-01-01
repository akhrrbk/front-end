// https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png

const container = document.querySelector('#container');

const text = document.createElement('h1');
text.innerHTML = 'Look at these Pokenmon Images!';
container.appendChild(text);

const imageLoad = [];

for (let i = 1; i < 850; i++){
    imageLoad[i] = document.createElement('img');
    imageLoad[i].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    container.appendChild(imageLoad[i]);
}



