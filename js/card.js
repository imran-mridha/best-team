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

  playerArr.push(playerName);
  // console.log(player);

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
// Set Click Event Handaler on the Calculate button

document.getElementById('calculate').addEventListener('click', function(){

  // Get Players Length

  const playersLength = playerArr.length;

  // get Per player input value by id

  const perPlayerCosts = getInputFieldValue('per-player-input');

  // Calculate Player expenses

  const totalPlayerExpense = (perPlayerCosts * playersLength);

  // Get Player expense Element Value

  const playerExpense = getTextElementValue('player-expense');

  // Set Player Expense Ammount on the Player Expense Element

  playerExpense.innerText = setTextElementValue('player-expense', totalPlayerExpense)

  // get Per player input value by id

  const managerCosts = getInputFieldValue('manager-input');

  console.log(managerCosts);



})
