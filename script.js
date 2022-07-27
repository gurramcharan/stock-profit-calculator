var buyPrice = document.querySelector('#buy-price');
var stockQuantity = document.querySelector('#stock-quantity');
var sellPrice = document.querySelector('#sell-price');
var submitBtn = document.querySelector('#submit-btn');
var outputTxt = document.querySelector('#output-txt');

function clickHandler(){
    var bp = Number(buyPrice.value);
    var qty = Number(stockQuantity.value);
    var sp = Number(sellPrice.value);

    calculateProfitOrLoss(bp,qty,sp);
}

function calculateProfitOrLoss(buy,quantity,sell){
    if(buy>sell){
        var lossInitial = (buy-sell)*quantity;
        var brokerage = ((buy*quantity)*(0.28/100));
        var loss= (lossInitial + brokerage).toFixed(2);
        var lossPercentage = (((loss/buy)/quantity)*100).toFixed(2);
        outputTxt.innerHTML =`<div 
                style = "background-color:red;
                 color:white; 
                 border-radius:5px;
                 margin: 1rem; 
                padding:1rem">Your loss is ${loss} Rs. and your loss percentage is ${lossPercentage}%</div>`;
    }
    else if(sell> buy){
        var profitIntial = (sell-buy)*quantity;
        var brokerage = ((buy*quantity)*(0.28/100));
        var profit = (profitIntial - brokerage).toFixed(2);
        var profitPercentage = (((profit/buy)/quantity)*100).toFixed(2);
        outputTxt.innerHTML =`<div 
                style = "background-color:green;
                 color:white; 
                 border-radius:5px;
                 margin: 1rem; 
                padding:1rem">Your profit is ${profit} Rs. and your profit percentage is ${profitPercentage}%</div>`;
    }
    else{
        var brokerage = ((buy*quantity)*(0.28/100)).toFixed(2);
        outputTxt.innerHTML =`<div 
                style = "background-color:orange;
                 color:white; 
                 border-radius:5px;
                 margin: 1rem; 
                padding:1rem">Good to exit on breakeven but never forget about your brokerage.\n Your brokerage is ${brokerage} Rs.</div>`;
    }
}

submitBtn.addEventListener('click',clickHandler);