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
// // Fetch API
// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("response, waiting~", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log('data parsed')
//         console.log(data.ticker.price)
//         parag.innerHTML = +data.ticker.price;
//     })
//     .catch(e => {
//         console.log('oh, no! error!', e)
//     })













// an easy way of fetching with Async await

// const fetchBtcPrice = async () => {
//     try{
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
//         const data = await res.json();
//         console.log(data.ticker.price)
//     } catch (e) {
//         console.log("something went wrong!", e);
//     }
// }






// Axios - promise based

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log('success');
//         parag.innerHTML += res.data.ticker.price
//     })
//     .catch(e => {
//         console.log('error!', e)
//     })

// now same thing with async
const getBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        // console.log(res.data.ticker.price)
        parag.innerHTML += res.data.ticker.price
    } catch (e) {
        console.log("error!", e)
    }
}
getBitcoinPrice()