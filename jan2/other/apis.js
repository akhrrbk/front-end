// XML 
// const req = new XMLHttpRequest();

// req.onload = function(){
//     console.log('all done');
//     const data = JSON.parse(this.responseText);
//     console.log(data.ticker.price);
// }

// req.onerror = function(){
//     console.log('error!')
//     console.log(this);
// }

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();


const parag = document.querySelector('p');
// Fetch API
fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log("response, waiting~", res)
        return res.json()
    })
    .then(data => {
        console.log('data parsed')
        console.log(data.ticker.price)
        parag.innerHTML = data.ticker.price;
    })
    .catch(e => {
        console.log('oh, no! error!', e)
    })