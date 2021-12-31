// function validUsernames(usernameList){
//     return usernameList.filter( n => n.length < 10);
// }

// console.log(validUsernames(['23423', 'wf342', '234fsf223r', 'wef4f']))


// // returns true if all elements in the array are even numbers
// const allEvens = nums.every(num => {
//     return num % 2 == 0;
// })
// const nums = [2,3,4,5,6];




// const prices = [9.99, 4.79, 1.99]

// total = 0;
// for (price of prices){
//     total += price;
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
//     return total + price;
// })

// const total = prices.reduce((total, price) => total + price);


// // we can set a starting point for sum
// const nums = [10,20,30,40,50,60];
// const suum = nums.reduce((sum, num) => sum + num, 200)

// this
const person = {
    firstName: 'Axror',
    lastName: 'Ab',
    birthDate: '1999',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function(){
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}