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


