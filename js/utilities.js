// Display Player List
function display(addedPlayers) {
  const players = document.getElementById('players')
  players.innerHTML = '';
  for (player of addedPlayers) {
    const li = document.createElement('li');
    li.innerText = player;
    li.classList.add('py-1');
    players.appendChild(li);
  }
}

// Get Player Name When click Select Button with onclick function

function addPlayer(element) {
  element.setAttribute('disabled', 'true');
  element.classList.add('bg-red-300');
  // Get Player Name
  const playerName = (element.parentNode.parentNode.children[0].children[0].innerText)
  if (playerArr.length < 5) {
    playerArr.push(playerName);
  } else {
    alert("You won't able to Select above 5 player on your team!!!");
    element.removeAttribute('disabled', 'true');
    element.classList.remove('bg-red-300');
  }
  display(playerArr)
}

// Get Input field Value with function

function getInputFieldValue(inputId) {
  const inputFieldValue = document.getElementById(inputId);
  const inputValueString = inputFieldValue.value;
  const inputValue = parseFloat(inputValueString);

  return inputValue;
}

// Get Text Element Value with Function

function getTextElementValue(elementId) {

  const textElementValue = document.getElementById(elementId);
  const elementValueString = textElementValue.innerText;
  const elementValue = parseFloat(elementValueString);

  return elementValue;
}

// Set Text Element Field Value On the Text Element with function

function setTextElementValue(elementId, value) {
  const textElementValue = document.getElementById(elementId);
  textElementValue.innerText = value;
}
// Calculate Total Player Expense
function calculatePlayerExpense() {
  // Get Players Length
  const playersLength = playerArr.length;
  // get Per player input value by id
  const perPlayerCosts = getInputFieldValue('per-player-input');
  // Calculate Player expenses
  const totalPlayerExpense = (perPlayerCosts * playersLength);
  return totalPlayerExpense;
}