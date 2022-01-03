const button = document.querySelector('button')
const ul = document.querySelector('#ul')

button.addEventListener('click', () => {
    joke();
})

const joke = async () => {
    try{
        const res = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' }});
        const newLi = document.createElement('li');
        newLi.append(res.data.joke);
        ul.append(newLi) 
    } catch (e){
        console.log("error", e)
    }
}

