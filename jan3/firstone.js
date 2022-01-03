const h1 = document.querySelector('h1')
const list = document.querySelector('#list')
const input = document.querySelector('input')
const button = document.querySelector('button')
// let inputting = '';


button.addEventListener('click', async () => {
    // console.log(`${input.value} via input itself`)
    datamining();
    h1.innerHTML = `Search results for '${input.value}'`;
})


const datamining = async () => {
    try{
        const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${input.value}`);
        console.log('axios code running');
        console.log(res.data)

        for(let i = 0; i < res.data.length; i++){
            console.log(res.data[i].show.name)
            const newLi = document.createElement('li');
            newLi.append(res.data[i].show.name);
            list.append(newLi) 
        }
    } catch (e) {
        console.log('error', e)
    }
}   