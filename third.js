// // methods //

// // const square = {
// //     area: function(side){
// //         return side*side;
// //     },
// //     perimeter: function(side){
// //         return 4*side;
// //     }
// // }
// // // square.area(10);
// // square.perimeter(10);




// // this in methods

// // const cat = {
// //     name: 'pipi',
// //     color: 'gray',
// //     meow: function(){
// //         console.log(this.name)
// //     }
// // }


// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg: function(eggCount){
//         this.eggCount++;
//         return '+EGG'
//     }
// }



// try {
//     // some code which will output an error
// } catch (e) {
//     console.log(e) // shows the actual error. it's easy to catch errors and this error is not going to affect on executing the remaining of our code :)
// }



// // DO NOT ALTER THE FOLLOWING CODE:
// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];
// // Write your code here
// const firstNames = fullNames.map(function(firstName){
//     return firstName.first;
// })


const add = (x, y) => {
    return x + y;
}