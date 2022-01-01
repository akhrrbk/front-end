// this is another experiment with trading bot
// update - wanted to setInterval 

var balance = 100000;
var currentPosition;
var accumulation = [];
inPosition = false;

for (var i = 0; i < 10; i++){
    const axrorbiolabs = {
        buy: function(NDX){
            return `bought NAS100 at ${xPrice} price`;
        },
        sell: function(NDX){
            return `sold NAS100 at ${xPrice} price`;
        },
        closePosition: function(NDX){
            return `closed the NAS100 position at ${xPrice} price`;
        }
    }
    
    xPrice = Math.floor(Math.random()*10500)
    console.log(xPrice)

    if (xPrice <= 5000 && inPosition == false){
        console.log(`${axrorbiolabs.buy()}`);
        currentPosition = xPrice;
        inPosition = true;
        accumulation[i] = xPrice;
    } else if (xPrice > 5000 && inPosition == true){
        console.log(`${axrorbiolabs.closePosition()}`);
        currentPosition -= xPrice;
        inPosition == false;
    }
    
    if (inPosition == false){
        balance += currentPosition;
        console.log(`${balance}`);
    }
}

console.log(balance);
console.log(accumulation);