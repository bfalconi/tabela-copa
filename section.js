function createGame(date, player1, score, player2) {
    return `
        <li>
            <span>${date}</span>
            <img src="./assets/svg/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${score}</strong>
            <img src="./assets/svg/icon-${player2}.svg" alt="Bandeira da ${player2}">
        </li>
    `
}

let delay = -0.2;

function createGroupStage(group, games) {
    delay = delay + 0.2;
    return `
        <div class="cardGroupStage" style="animation-delay: ${delay}s">
            <h2>${group}</h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

function createKnockout(group, games) {
    delay = delay + 0.2;
    return `
        <div class="cardKnockout" style="animation-delay: ${delay}s">
            <h2>${group}</h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('#cardsGroupStage').innerHTML =    
createGroupStage("Grupo A", 
    createGame("Dom 20/11<br>13:00", "qatar", "0 x 2", "ecuador") + 
    createGame("Seg 21/11<br>13:00", "senegal", "0 x 2", "netherlands") + 
    createGame("Sex 25/11<br>10:00", "qatar", "1 x 3", "senegal") + 
    createGame("Sex 25/11<br>13:00", "netherlands", "1 x 1", "ecuador") + 
    createGame("Ter 29/11<br>12:00", "netherlands", "2 x 0", "qatar") + 
    createGame("Ter 29/11<br>12:00", "ecuador", "1 x 2", "senegal")) + 
createGroupStage("Grupo B", 
    createGame("Seg 21/11<br>10:00", "england", "6 x 2", "iran") + 
    createGame("Seg 21/11<br>16:00", "united-states", "1 x 1", "wales") + 
    createGame("Sex 25/11<br>07:00", "wales", "0 x 2", "iran") + 
    createGame("Sex 25/11<br>16:00", "england", "0 x 0", "united-states") + 
    createGame("Ter 29/11<br>16:00", "iran", "0 x 1", "united-states") + 
    createGame("Ter 29/11<br>16:00", "wales", "0 x 3", "england")) + 
createGroupStage("Grupo C", 
    createGame("Ter 22/11<br>07:00", "argentina", "1 x 2", "saudi-arabia") + 
    createGame("Ter 22/11<br>13:00", "mexico", "0 x 0", "poland") + 
    createGame("Sab 26/11<br>10:00", "poland", "2 x 0", "saudi-arabia") + 
    createGame("Sab 26/11<br>10:00", "argentina", "2 x 0", "mexico") + 
    createGame("Qua 30/11<br>16:00", "poland", "0 x 2", "argentina") + 
    createGame("Qua 30/11<br>16:00", "saudi-arabia", "1 x 2", "mexico")) + 
createGroupStage("Grupo D", 
    createGame("Ter 22/11<br>10:00", "denmark", "0 x 0", "tunisia") + 
    createGame("Seg 22/11<br>16:00", "france", "4 x 1", "australia") + 
    createGame("Sab 26/11<br>07:00", "tunisia", "0 x 1", "australia") + 
    createGame("Sab 26/11<br>13:00", "france", "2 x 1", "denmark") + 
    createGame("Qua 30/11<br>12:00", "tunisia", "1 x 0", "france") + 
    createGame("Qua 30/11<br>12:00", "australia", "1 x 0", "denmark")) + 
createGroupStage("Grupo E", 
    createGame("Qua 23/11<br>10:00", "germany", "1 x 2", "japan") + 
    createGame("Qua 23/11<br>13:00", "spain", "7 x 0", "costa-rica") + 
    createGame("Dom 27/11<br>07:00", "japan", "0 x 1", "costa-rica") + 
    createGame("Dom 27/11<br>13:00", "spain", "1 x 1", "germany") + 
    createGame("Qui 01/12<br>16:00", "japan", "2 x 1", "spain") + 
    createGame("Qui 01/12<br>16:00", "costa-rica", "2 x 4", "germany")) + 
createGroupStage("Grupo F", 
    createGame("Qua 23/11<br>07:00", "marocco", "0 x 0", "croatia") + 
    createGame("Qua 23/11<br>16:00", "belgium", "1 x 0", "canada") + 
    createGame("Dom 27/11<br>10:00", "belgium", "0 x 2", "marocco") + 
    createGame("Dom 27/11<br>13:00", "croatia", "4 x 1", "canada") + 
    createGame("Qui 01/12<br>12:00", "croatia", "0 x 0", "belgium") + 
    createGame("Qui 01/12<br>12:00", "canada", "1 x 2", "marocco")) + 
createGroupStage("Grupo G", 
    createGame("Qui 24/11<br>07:00", "switzerland", "1 x 0", "cameroon") + 
    createGame("Qui 24/11<br>16:00", "brazil", "2 x 0", "serbia") + 
    createGame("Seg 28/11<br>07:00", "cameroon", "3 x 3", "serbia") + 
    createGame("Sex 28/11<br>13:00", "brazil", "1 x 0", "switzerland") + 
    createGame("Sex 02/12<br>16:00", "cameroon", "1 x 0", "brazil") + 
    createGame("Ter 02/12<br>16:00", "serbia", "2 x 3", "switzerland")) + 
createGroupStage("Grupo H", 
    createGame("Qui 24/11<br>10:00", "uruguay", "0 x 0", "southkorea") + 
    createGame("Qui 24/11<br>13:00", "portugal", "3 x 2", "ghana") + 
    createGame("Seg 28/11<br>10:00", "southkorea", "2 x 3", "ghana") + 
    createGame("Seg 28/11<br>16:00", "portugal", "2 x 0", "uruguay") + 
    createGame("Ter 02/12<br>12:00", "southkorea", "2 x 1", "portugal") + 
    createGame("Ter 02/12<br>12:00", "ghana", "0 x 2", "uruguay")) 
    
document.querySelector('#cardsKnockout').innerHTML =
createKnockout("Oitavas de Final", 
    createGame("Sab 03/12<br>12:00", "netherlands", "3 x 1", "united-states") + 
    createGame("Sab 03/12<br>16:00", "argentina", "2 x 1", "australia") + 
    createGame("Seg 05/12<br>12:00", "japan", "1 <span>1</span> x <span>3</span> 1", "croatia") + 
    createGame("Seg 05/12<br>16:00", "brazil", "4 x 1", "southkorea") + 
    createGame("Dom 04/12<br>12:00", "france", "3 x 1", "poland") + 
    createGame("Dom 04/12<br>16:00", "england", "3 x 0", "senegal") + 
    createGame("Ter 06/12<br>12:00", "marocco", "0 <span>3</span> x <span>0</span> 0", "spain") + 
    createGame("Ter 06/12<br>16:00", "portugal", "6 x 1", "switzerland")) +
createKnockout("Quartas de Final", 
    createGame("Sex 09/12<br>16:00", "netherlands", "2 <span>3</span> x <span>4</span> 2", "argentina") + 
    createGame("Sex 09/12<br>12:00", "croatia", "1 <span>4</span> x <span>2</span> 1", "brazil") + 
    createGame("Sab 10/12<br>16:00", "england", "1 x 2", "france") + 
    createGame("Sab 10/12<br>12:00", "marocco", "1 x 0", "portugal")) +
createKnockout("Semi Final", 
    createGame("Sex 13/12<br>16:00", "argentina", "3 x 0", "croatia") + 
    createGame("Sex 14/12<br>16:00", "france", " x ", "marocco")) +
createKnockout("Disputa do 3 lugar", 
    createGame("Sex 17/12<br>12:00", "", " x ", "")) +
createKnockout("Final", 
    createGame("Sex 18/12<br>12:00", "", " x ", ""))
