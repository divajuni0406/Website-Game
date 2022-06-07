function bot() {
  let botBrain = ["gunting", "batu", "kertas"];
  let botPick = botBrain[Math.floor(Math.random() * botBrain.length)];
  return botPick;
}

function winner(human, bot) {
  if (human == bot) return "DRAW";
  if (human == "gunting") return bot == "batu" ? "COM WIN" : "PLAYER 1 WIN";
  if (human == "batu") return bot == "kertas" ? "COM WIN" : "PLAYER 1 WIN";
  if (human == "kertas") return bot == "gunting" ? "COM WIN" : "PLAYER 1 WIN";
}

function removeClassActive() {
  const classBotOption = document.querySelectorAll(".comBrain button");
  classBotOption.forEach((value) => {
    value.classList.remove("active");
  });
}

function removeClassActiveUser() {
  const classBotOption = document.querySelectorAll(".playerChoice button");
  classBotOption.forEach((value) => {
    value.classList.remove("activeUser");
  });
}

function buttonDisabled() {
  const user = document.getElementById("user");
  user.classList.add("cursor");
}

function resetButtonDisabled() {
  const user = document.querySelector(".refresh button");
  user.classList.add("cursor");
}

function resetButtonDisabled1() {
  const user = document.querySelector(".refresh button");
  user.classList.remove("cursor");
}

function random() {
  let botBrain1 = ["gunting", "batu", "kertas"];
  let i = 0;
  let countArray = botBrain1.length - 1;
  let startDateTime = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - startDateTime > 3000) {
      clearInterval;
      return;
    }
    removeClassActive();
    i++;
    if (countArray < i) {
      i = 0;
    }

    let element = document.getElementById(botBrain1[i]);
    element.classList.add("active");
  }, 100);
}

function resetButton() {
  removeClassActive();
  removeClassActiveUser();
  let textElement = document.getElementById("textVS");
  textElement.innerHTML = "VS";
  textElement.classList.remove("active-text-win");
  const cursor = document.getElementById("user");
  cursor.classList.remove("cursor");
}

function pick(humanOption) {
  random();
  buttonDisabled();
  resetButtonDisabled();
  let humanOptionElement = document.getElementById(humanOption + "-p");
  humanOptionElement.classList.add("activeUser");
  let textElement = document.getElementById("textVS");
  textElement.innerHTML = "Loading...";
  textElement.classList.add("active-text-win");
  setTimeout(function () {
    removeClassActive();
    resetButtonDisabled1();
    const botOption = bot();
    let botOptionElement = document.getElementById(botOption);
    botOptionElement.classList.add("active");
    const finalResult = winner(humanOption, botOption);
    let textElement = document.getElementById("textVS");
    textElement.innerHTML = finalResult;
    textElement.classList.add("active-text-win");
    console.log("human pick : " + humanOption);
    console.log("bot pick : " + botOption);
    console.log("hasil akhir : " + finalResult);
  }, 3000);
}