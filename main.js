function createGame(player1, hour, player2){
  return `
  
  <li class="liPartidas">
  <li>
   <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
   <strong>${hour}</strong>
   <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
 </li>
  
  `
}

let delay = -0.4;

function createCard(data, day, games){

  delay = delay + 0.4;

  return `
  <div class="card" style="animation-delay: ${delay}s">
    
      <h2>${data} <span>${day}</span></h2>

      <ul>
        ${games}
      </ul>
  </div>
  
  `
}



document.querySelector("#cards").innerHTML = 

createCard("24/11","QUINTA", 
createGame("brazil","16:00","serbia")) +

createCard("28/11","SEGUNDA", 
createGame("switzerland","13:00","brazil")) +

createCard("02/12","SEXTA", 
createGame("brazil","16:00","cameroon"))





