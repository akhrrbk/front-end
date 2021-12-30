const monthofyear = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var balance = 1000000;
let startingBalance = balance;
console.log("*****************");
console.log(`starting balance: ${balance}`);
console.log("*****************");


for (var y = 0; y < 12; y++){
     
            var xPrice = 10;
        for (let i = 1; i<=100000; i *= 10){
            xPrice += Math.floor(Math.random()*i);}
        
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
        
        axrorbiolabs.buy();
        var currentPosition = xPrice;
        
        var xPrice = 10;
        for (let i = 1; i<=100000; i *= 10){
            xPrice += Math.floor(Math.random()*i);
        }
        
        axrorbiolabs.closePosition();
        currentPosition -= xPrice;
        
        balance += currentPosition;    
    
        
    var newB = balance;
    // console.log("*****************");
    // console.log(`the total trades this month: ${j}`);
    console.log(`balance report for ${monthofyear[y]}: ${newB}`);
    console.log("*****************");    
}

var pnl = balance - startingBalance;

console.log("****annual report****");
console.log(`current balance: ${balance}`);
console.log(`P&L is: ${pnl}`);
console.log("*****************");    
