let input = prompt("What would you like to do?");
const todos = ['see a friend for dinner', 'finish learning JS OOP'];

while(input !== 'quit'){
    
    if (input === 'list'){
        console.log('**********');
        for (let x = 0; x < todos.length; x++){
            console.log(`${x}: ${todos[x]}`);  
        }
        console.log('**********');
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`'${newTodo}' has added to the list!`)
    } else {
        console.log('Unknown index')
    }

    input = prompt("what would you like to do?");
}

// function repeat(text, num){
//     for (let i = 0; i < num; i++){
//     console.log(text);
// }
// }
// repeat('hi', 3)



// function sum(a){
//     let sum = 0;
//     for(i=0;i<a.length;i++){
//         sum += a[i];
//     }
//     return sum;
// }

// DEFINE YOUR FUNCTION BELOW:
// const dayofweek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// function returnDay(n){
//     return dayofweek[n-1];
// }
// returnDay(7);


// function isBetween(min, max){
//     return function(num){
//         return num >=min && num <= max;
//     }
// }

// const axror = isBetween(1,19);
// axror(5); //output true


// my method

// var xPrice = Math.floor(Math.random()*10000 + Math.random()*1000 + Math.random()*100)

var balance = 1000000;
let startingBalance = balance;
console.log("*****************");
console.log(`starting balance: ${balance}`);
console.log("*****************");

for(var j = 0; j < 20; j++){
    if(balance <= 900000 || balance >= 1100000){
        break;
    } else {
        var xPrice = 10;
    for (let i = 1; i<=100000; i *= 10){
        xPrice += Math.floor(Math.random()*i);
    }
    
    const axrorbiolabs = {
        buy: function(NDX){
            return `bought NAS100 at ${xPrice} price`;
        },
        sell: function(NDX){
            return `sold NAS100 at ${xPrice} price`;
        },
        closePosition: function(NDX){
            return `closed the NAS100 position at ${xPrice} price`;
        }
    }
    
    axrorbiolabs.buy();
    var currentPosition = xPrice;
    
    var xPrice = 10;
    for (let i = 1; i<=100000; i *= 10){
        xPrice += Math.floor(Math.random()*i);
    }
    
    axrorbiolabs.closePosition();
    currentPosition -= xPrice;
    
    if (currentPosition > 0){
        console.log(`the profit amount is: ${currentPosition} / current balance: ${balance}`);
    } else if (currentPosition < 0){
        console.log(`the loss amount is: ${currentPosition}  / current balance: ${balance}`);
    } else console.log(`we are at breakeven right now  / current balance: ${balance}`);

    balance += currentPosition;
    }
}

console.log("*****************");
console.log(`the total trades this month: ${j}`);
console.log(`current balance: ${balance}`);
if (startingBalance > balance){
    console.log(`loss for the month: -${startingBalance-balance}`);
} else if (startingBalance < balance){
    console.log(`profit for the month: +${balance-startingBalance}`);
} else console.log(`P&L at breakeven: starting balance: ${startingBalance} = ${balance}`);
console.log("*****************");





