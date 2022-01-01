// function multiply(a, b = 1, c = 5){
//     return a*b*c;
// }


// const nums = [1,2,3,4,5,6,7,8,9];

// // this message is spread with comma
// console.log("heuh", 'erger', 'ererf', 'efer');
// // this message is printed out in an array
// console.log(nums);
// //this messages is spread out
// console.log(...nums);
// console.log(...'hello');

// const salomBir = ['fwefe', 'fferfer', 'wfrer'];
// const salomIkki = [2342,2342,24234,234234,234234,234234];

// const salomNew = [...salomBir, ...salomIkki];
// // this seem to work too  const salomNew = [...salomBir] + [...salomIkki];

// // this one is a little weird
// const hi = {...'hiiiii'}


// rest param
// function sumX(...nums){
//     return nums.reduce((total, num) => total + num);
// }

// function competitionResults(gold, silver, ...everyoneElse){
//     console.log(`Gold goes to ${gold}`)
//     console.log(`Silver goes to ${silver}`)
//     console.log(`thanks for others: ${everyoneElse}`)
// }




// const scores = [34,29,7,20,15];
// const [firstPlace, secondPlace] = scores; 
// console.log(firstPlace);


// // destructing objects
// const person1 = {
//     email: 'akhrrbk@gmail.com',
//     firstName: 'Axror',
//     lastName: 'Ab',
//     height: 190,
//     born: 1999,
//     education: 'High school',
//     occupation: 'programmer',
//     interests: 'language, music, money, sci-fi'
// }

// const {email, firstName} = person1;
// // we can add custom names 
// const {born: bornYear} = person1; 
// const {dead: yearDied} = person1; // return undefined ;)

// function fullName({firstName, lastName}){
//     return `${firstName} ${lastName}`
// }


// filter method
// const movies = [
//     {
//         title: "aziz",
//         score: 50,
//         year: 2002
//     },
//     {
//       title: "axror",
//       score: 90,
//       year: 1999
//     },
//     {
//       title: "tilla",
//       score: 75,
//       year: 2007
//     }
// ]
// // movies.filter((movie) => movie.score >= 90);
// // moviees.filter(({score}) => 90);

// // movies.map( movie => {
// //     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// // })

// movies.map(({title, year, score}) => {
//     return `${title} (${year}) is rated ${score}`
// })