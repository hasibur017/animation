document.getElementById('btn-total-cost').addEventListener('click',function(){
    // Total player cost
    let playerCost = document.getElementById('playr-total-cost');
    let playerCostString = playerCost.innerText;
    let playerTotalCost = parseInt(playerCostString);
    
    // Manager cost
    let managerCost = document.getElementById('manager-cost');
    let managerCostString = managerCost.innerText;
    let managerTotalCost = parseInt(managerCostString);

    // Coach cost
    let coachCost = document.getElementById('coach-cost');
    let coachCostString = coachCost.innerText;
    let coachTotalCost = parseInt(coachCostString);

    // Set total cost
    let cost = document.getElementById('total-cost');
    let totalCostString = cost.innerText;
    let totalCost = parseInt(totalCostString);


    let allCost = playerTotalCost + managerTotalCost + coachTotalCost + totalCost;
    cost.innerText = allCost;
})