const p = document.querySelector('#p')
const h3 = document.querySelector('#secondh1')
const list = document.querySelector('#list')
const input = document.querySelector('input')
const button = document.querySelector('#searchbutton')
const button2 = document.querySelector('#cleanbutton')
const istrue = false;
let buttonclick = 0;

button.addEventListener('click', async () => {
    // console.log(`${input.value} via input itself`)
    if(buttonclick > 0){
        cleanthelist()
    }
    datamining();
    h3.innerHTML = `Search results for '${input.value}'`;
    buttonclick += 1;
})

function cleanthelist(){
    // const lil = document.querySelectorAll('li').length;
    // console.log(`deleting the old list of ${lil}`);
    
    // for (let j = 0; j < lil; j++){
    //     list.remove(document.querySelectorAll('li')[j])
    // }
}

const datamining = async () => {
    try{
        const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${input.value}`);
        // console.log('axios code running');
        // console.log(res.data)

        if(res.data.length !== 0){
            for(let i = 0; i < res.data.length; i++){
                
                // console.log(res.data[i].show.name)
                const newLi = document.createElement('li');
                newLi.append(`${res.data[i].show.name} // `);
                
                // I wanna add a link attribute to li here
                if(res.data[i].show.image !== null){
                    // console.log(`image nummber ${i+1}: ${res.data[i].show.image.medium}`)
                    const alink = document.createElement('a');
                    alink.href = res.data[i].show.image.medium;
                    // alink.append(res.data[i].show.image.medium);
                    alink.innerHTML = 'link here'
                    alink.style.color = 'red';
                    newLi.appendChild(alink)
                }
                list.append(newLi) 
                
                if(res.data[i].show.image !== null){
                    console.log(`image nummber ${i+1}: ${res.data[i].show.image.medium}`)
                }
            }
        } else {
            console.log(`'${input.value}' does not exist in our database`);
            p.innerHTML = `'${input.value}' does not exist in our database`;
            p.style.color = 'red'
        }
    } catch (e) {
        console.log('error', e)
    }
}   
