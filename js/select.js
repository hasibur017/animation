const playerArray = [];

function display(players){

    const playerList = document.getElementById('player-list');
    playerList.innerHTML ='';

    for(let i = 0; i<players.length; i++){

        const name = playerArray[i].playerName;

        const ul = document.createElement('ul');

        ul.innerHTML = `
        
                    <li>${name}</li>

        `;
        playerList.appendChild(ul)
    }
}


function selectPlayer(element){
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName,
    }

    playerArray.push(playerObj);
    

    display(playerArray);
}