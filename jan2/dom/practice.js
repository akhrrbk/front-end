const button1 = document.querySelector("#hello");
const button2 = document.querySelector("#goodbye")

button1.addEventListener('click', () => {
    console.log('hello');
})

button2.addEventListener('click', () => {
    console.log('goodbye');
})