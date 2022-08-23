document.getElementById('btn-player-total').addEventListener('click',function(){
    let playrTotalCost = document.getElementById('playr-total-cost');
    let playrTotalCostString = playrTotalCost.innerText;
    let totalCost = parseInt(playrTotalCostString);

    let playerAmount = document.getElementById('player-amount');
    let playerAmountString = playerAmount.innerText;
    let totalAmount = parseInt(playerAmountString);

    let playerTotalAmount = totalCost + totalAmount;
    playrTotalCost.innerText = playerTotalAmount;
})


