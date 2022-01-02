const player1display = document.querySelector('#player1span')
const player2display = document.querySelector('#player2span')
const player1button = document.querySelector('#player1button')
const player2button = document.querySelector('#player2button')
const resetall = document.querySelector('#reset')
const option = document.querySelector('select')

let player1score = 0;
let player2score = 0;
let towin = ;
let gameover = false;

option.addEventListener('change', function() {
    // console.log(option.value);
    towin = parseInt(option.value);
    console.log(towin)
    reset();
})

if (gameover === false){
    player1button.addEventListener('click', () => {
        if(player1score <= towin && gameover === false){
            
            if(player1score !== towin){
                player1score += 1
            }
            if(player1score === towin){
                gameover = true;
                player1display.classList.add('green')
                player2display.classList.add('red')
            }
            
            console.log(`player1: ${player1score}`);
            player1display.innerHTML = player1score;

        }
    })
    
    player2button.addEventListener('click', () => {
        if(player2score <= towin && gameover === false){
            
            if(player2score !== towin){
                player2score += 1
            }
            if(player2score === towin){
                gameover = true;
                player2display.classList.add('green')
                player1display.classList.add('red')
            }

            console.log(`player2: ${player2score}`);
            player2display.innerHTML = player2score;
        }
    })
}

resetall.addEventListener('click', reset)

function reset(){
    player1score = 0;
    player2score = 0;
    console.log('reset is clicked');
    gameover = false;
    player1display.classList.remove('red', 'green');
    player2display.classList.remove('red', 'green');
    player1display.innerHTML = player1score;
    player2display.innerHTML = player2score;
}

