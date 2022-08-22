const playerArr = [];


function display(addedPlayers){
  const players = document.getElementById('players');
  // Empty Player
  players.innerHTML = '';
  // Get Allplayer of player
  for(player of addedPlayers){
    const li = document.createElement('li');
    li.innerText = player;
    li.classList.add('py-1');
    players.appendChild(li);
  }
}
// Get Player Name When click Select Button with onclick function

function addPlayer(element){
  element.setAttribute('disabled','true')
  element.classList.add('bg-red-300')
  // console.log(element.classList);
  // Get Player Name

  const playerName = (element.parentNode.parentNode.children[0].children[0].innerText);
  // console.log(playerName);

  if(playerArr.length < 5){
    playerArr.push(playerName);
  }else{
    alert('You Cannot Select greater than 5 player!!!')
    element.removeAttribute('disabled','true')
    element.classList.remove('bg-red-300')
  }
  // playerArr.push(playerName);

  display(playerArr);
}

// Get Input field Value with function

function getInputFieldValue(inputId){
  const inputFieldValue = document.getElementById(inputId);
  const inputValueString = inputFieldValue.value;
  const inputValue = parseFloat(inputValueString);

  return inputValue;
}

// Get Text Element Value with Function

function getTextElementValue(elementId){

  const textElementValue = document.getElementById(elementId);
  const elementValueString = textElementValue.innerText;
  const elementValue = parseFloat(elementValueString);

  return elementValue;
}

// Set Text Element Field Value On the Text Element with function

function setTextElementValue(elementId, value){
  const textElementValue = document.getElementById(elementId);
  textElementValue.innerText = value;
}

function calculatePlayerExpense(){
// Get Players Length
const playersLength = playerArr.length;
// get Per player input value by id
const perPlayerCosts = getInputFieldValue('per-player-input');
// Calculate Player expenses
const totalPlayerExpense = (perPlayerCosts * playersLength);
return totalPlayerExpense;
}

// Set Click Event Handaler on the Calculate button

document.getElementById('calculate-btn').addEventListener('click', function(){

  // get Per player input value by id

  const perPlayerCosts = getInputFieldValue('per-player-input');

  if(isNaN(perPlayerCosts)){
    alert('Per Player Input value should ba number!!!');
    return;
  }else if(perPlayerCosts < 0){
    alert('Input Value Should not be nagative!!');
    return;
   }

  //Get Player expenses

  const totalPlayerExpense = calculatePlayerExpense();

  // Get Player expense Element Value

  const playerExpense = getTextElementValue('player-expense');

  // Set Player Expense Ammount on the Player Expense Element

  playerExpense.innerText = setTextElementValue('player-expense', totalPlayerExpense);

})



// Set Click Event Handaler on the Calculate Total button

document.getElementById('total-calculate-btn').addEventListener('click', function(){

  const totalPlayerCosts = calculatePlayerExpense();

  const managerCosts = getInputFieldValue('manager-input');

  const coachCosts = getInputFieldValue('coach-costs');

  if(isNaN(managerCosts) || isNaN(coachCosts)){
    alert('Input value should ba number!!!');
    return;
  }else if(managerCosts < 0){
    alert('Input Value Should not be nagative!!');
    return;
   }

  const totalCosts = (totalPlayerCosts + managerCosts + coachCosts);

  const totalCostElement = getTextElementValue('total-costs');

  totalCostElement.innerText = setTextElementValue('total-costs', totalCosts);
  
})
