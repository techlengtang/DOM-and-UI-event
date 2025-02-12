// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;

// DOMS ELEMENTS  ---------------------------------------------------------
let changeRemaining = 2;
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");
// passwordInput.addEventListener("keypress", handleEnterPasserord);

const instructionLabel = document.getElementById("instructionLabel");

function loadGameState() {
  const remainingChances = localStorage.getItem("remainingChances");
  const hasWon = localStorage.getItem("hasWon");

  if (remainingChances !== null) {
      changeRemaining = parseInt(remainingChances);
  }

  if (hasWon === "true") {
      showWin();
  } else {
      showGame();
  }
}

// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

function showGame() {
  // You can use this function to dispaly the Game view\
  instructionLabel.textContent = `Enter your code (You can try ${3} times only !)`;
  changeRemaining = 2;
  show(passwordView);
  hide(wonView);
  hide(lostView);
}

function showWin() {
  // You can use this function to dispaly the Win View
  hide(passwordView);
  show(wonView);
  hide(lostView);
  
}
function showLost() {
  // You can use this function to dispaly the Lost View
  hide(passwordView);
  hide(wonView);
  show(lostView);
  localStorage.removeItem("remainingChances"); // Clear chances when lost
}

function handleCheck() {
   // Manage your logic when the button is pressed
   const passwordEnter = passwordInput.value;

   if (passwordEnter != "")
   {
    if(passwordEnter == SECRET_CODE){
      showWin();
    }else{
      if(changeRemaining > 0)
      {
        changeRemaining--;
        console.log(changeRemaining);
        localStorage.setItem("remainingChances", changeRemaining); // Store remaining chances
      }else{
        showLost();
      }
    }
    instructionLabel.textContent = `Enter your code (You can try ${changeRemaining + 1} times only !)`;
   }
}

// MAIN   ---------------------------------------------------------

 