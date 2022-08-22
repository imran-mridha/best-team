const playerArr = [];
// Set Click Event Handaler on the Calculate button

document.getElementById('calculate-btn').addEventListener('click', function () {

  // get Per player input value by id

  const perPlayerCosts = getInputFieldValue('per-player-input');

  if (isNaN(perPlayerCosts)) {
    alert('Per Player Input value should ba number!!!');
    return;
  } else if (perPlayerCosts < 0) {
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

document.getElementById('total-calculate-btn').addEventListener('click', function () {

  const totalPlayerCosts = calculatePlayerExpense();

  const managerCosts = getInputFieldValue('manager-input');

  const coachCosts = getInputFieldValue('coach-costs');

  if (isNaN(managerCosts) || isNaN(coachCosts)) {
    alert('Input value should ba number!!!');
    return;
  } else if (managerCosts < 0) {
    alert('Input Value Should not be nagative!!');
    return;
  }

  const totalCosts = (totalPlayerCosts + managerCosts + coachCosts);

  const totalCostElement = getTextElementValue('total-costs');

  // console.log(totalCostElement);

  totalCostElement.innerText = setTextElementValue('total-costs', totalCosts);

})
