// Object Oriented Programming
class GameStart {
  constructor() {
    this.botWin = "COM WIN";
    this.humanWin = "PLAYER1 WIN";
    this.botPick;
    this.humanPick;
  }
  bot() {
    let botBrain = ["scissors", "rock", "paper"];
    let botPick = botBrain[Math.floor(Math.random() * botBrain.length)];
    return (this.botPick = botPick);
  }

  winner(human, bot) {
    if (human == bot) return "DRAW";
    if (human == "scissors") return bot == "rock" ? this.botWin : this.humanWin;
    if (human == "rock") return bot == "paper" ? this.botWin : this.humanWin;
    if (human == "paper") return bot == "scissors" ? this.botWin : this.humanWin;
  }
}

class ButtonFunction {
  removeClassActive() {
    const classBotOption = document.querySelectorAll(".comBrain button");
    classBotOption.forEach((value) => {
      value.classList.remove("active");
    });
  }

  removeClassActiveUser() {
    const classBotOption = document.querySelectorAll(".playerChoice button");
    classBotOption.forEach((value) => {
      value.classList.remove("activeUser");
    });
  }

  buttonDisabled() {
    const user = document.getElementById("user");
    user.classList.add("cursor");
  }

  resetButtonDisabled() {
    const user = document.querySelector(".refresh button");
    user.classList.add("cursor");
  }

  resetButtonDisabled1() {
    const user = document.querySelector(".refresh button");
    user.classList.remove("cursor");
  }

  resetButton() {
    let textElement = document.getElementById("textVS");
    textElement.innerHTML = "VS";
    textElement.classList.remove("active-text-win");
    textElement.classList.remove("active-text-win1");
    const cursor = document.getElementById("user");
    cursor.classList.remove("cursor");
  }
}
// Object Oriented Programming End Tag

const randomManipulation = () => {
  const random = new ButtonFunction();
  let botBrain = ["rock", "scissors", "paper"];
  let i = 0;
  let countArray = botBrain.length;
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

    let element = document.getElementById(botBrain[i]);
    element.classList.add("active");
    i++;
  }, 100);
};

function resetButton() {
  const reset = new ButtonFunction();
  reset.removeClassActive();
  reset.removeClassActiveUser();
  reset.resetButton();
}

function pick(humanOption) {
  const start = new GameStart();
  const button = new ButtonFunction();
  randomManipulation();
  button.buttonDisabled();
  button.resetButtonDisabled();
  let humanOptionElement = document.getElementById(humanOption + "-p");
  humanOptionElement.classList.add("activeUser");
  let textElement = document.getElementById("textVS");
  textElement.innerHTML = "Loading...";
  textElement.classList.add("active-text-win");
  setTimeout(function () {
    button.removeClassActive();
    button.resetButtonDisabled1();
    const botOption = start.bot();
    let botOptionElement = document.getElementById(botOption);
    botOptionElement.classList.add("active");
    const finalResult = start.winner(humanOption, botOption);
    let textElement = document.getElementById("textVS");
    textElement.innerHTML = finalResult;
    textElement.classList.add("active-text-win1");
    console.log("human pick : " + humanOption);
    console.log("bot pick : " + botOption);
    console.log("hasil akhir : " + finalResult);
  }, 3000);
}
