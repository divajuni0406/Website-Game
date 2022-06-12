// Object Oriented Programming
class GameStart {
  constructor() {
    this.comWin = "COM WIN";
    this.playerWin = "PLAYER1 WIN";
    this.comPick;
    this.humanPick;
  }
  // Com Pick 
  comOption() {
    let comBrain = ["scissors", "rock", "paper"];
    let comPick = comBrain[Math.floor(Math.random() * comBrain.length)];
    return (this.comPick = comPick);
  }
// Winner Calculation 
  winner(player, com) {
    if (player == com) return "DRAW";
    if (player == "scissors") return com == "rock" ? this.comWin : this.playerWin;
    if (player == "rock") return com == "paper" ? this.comWin : this.playerWin;
    if (player == "paper") return com == "scissors" ? this.comWin : this.playerWin;
  }
}
// Remove Computer Active Function  
class ButtonFunction {
  removeClassActive() {
    const classBotOption = document.querySelectorAll(".comBrain button");
    classBotOption.forEach((value) => {
      value.classList.remove("active");
    });
  }
// Remove User Active Function  
  removeClassActiveUser() {
    const classBotOption = document.querySelectorAll(".playerChoice button");
    classBotOption.forEach((value) => {
      value.classList.remove("activeUser");
    });
  }
  // Disable Button User 
  buttonDisabled() {
    const player = document.querySelector(".player");
    player.classList.add("cursor");
  }
  // Disable Reset Button 
  resetButtonDisabled() {
    const player = document.querySelector(".refresh button");
    player.classList.add("cursor");
  }
  // Remove Disable Reset Button
  resetButtonDisabled1() {
    const player = document.querySelector(".refresh button");
    player.classList.remove("cursor");
  }
  // Reset Button Function 
  resetButton() {
    let textElement = document.getElementById("textVS");
    textElement.innerHTML = "VS";
    textElement.classList.remove("active-text-win");
    textElement.classList.remove("active-text-win1");
    const cursor = document.querySelector(".player");
    cursor.classList.remove("cursor");
  }
}
// Object Oriented Programming End Tag
// Random Pick Manipulation Computer 
const randomManipulation = () => {
  const random = new ButtonFunction();
  let comBrain = ["rock", "scissors", "paper"];
  let i = 0;
  let countArray = comBrain.length;
  let startDateTime = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - startDateTime > 3000) {
      clearInterval;
      return;
    }
    random.removeClassActive();
    if (i === countArray) {
      i = 0;
    }

    let element = document.getElementById(comBrain[i]);
    element.classList.add("active");
    i++;
  }, 100);
};
// Reset Button 
function resetButton() {
  const reset = new ButtonFunction();
  reset.removeClassActive();
  reset.removeClassActiveUser();
  reset.resetButton();
}
// Human Option Function 
function pick(playerOption) {
  const start = new GameStart();
  const button = new ButtonFunction();
  randomManipulation();
  button.buttonDisabled();
  button.resetButtonDisabled();
  let playerOptionElement = document.getElementById(playerOption + "-p");
  playerOptionElement.classList.add("activeUser");
  let textElement = document.getElementById("textVS");
  textElement.innerHTML = "Loading...";
  textElement.classList.add("active-text-win");
  setTimeout(function () {
    button.removeClassActive();
    button.resetButtonDisabled1();
    const comOption = start.comOption();
    let comOptionsElement = document.getElementById(comOption);
    comOptionsElement.classList.add("active");
    const finalResult = start.winner(playerOption, comOption);
    let textElement = document.getElementById("textVS");
    textElement.innerHTML = finalResult;
    textElement.classList.add("active-text-win1");
    // console.log("player pick : " + playerOption);
    // console.log("com pick : " + comOption);
    // console.log("hasil akhir : " + finalResult);
  }, 3000);
}
