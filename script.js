// Variables

const randomText = [
  { id: 1, text: "Success is a journey, not a destination." },
  { id: 2, text: "Success is where preparation and opportunity meet." },
  { id: 3, text: "Success is how high you bounce when you hit bottom." },
  {
    id: 4,
    text: "Success is the progressive realization of predetermined, worthwhile, personal goals.",
  },
  {
    id: 5,
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
  },
  { id: 6, text: "When it comes to success, there are no shortcuts." },
  { id: 7, text: "I never dreamed about success, I worked for it." },
  { id: 8, text: "Success is not in what you have, but who you are." },
  {
    id: 9,
    text: "Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.",
  },
  {
    id: 10,
    text: "f you want to live a happy life, tie it to a goal, not to people or things.",
  },
];

const newText = document.getElementById("newText");
const textShow = document.getElementById("textShow");
const textInput = document.getElementById("textInput");
const timer = document.getElementById("timer");
const reset = document.getElementById("reset");

// Event Listeners

newText.addEventListener("click", newTextHandler);
textInput.addEventListener("input", inputTextHandler);
reset.addEventListener("click", function () {
  textInput.value = "";
});

// Functions

function newTextHandler() {
  textInput.removeAttribute("disabled");
  let textNumber = Math.floor(Math.random() * randomText.length);
  randomText.map(function (quote) {
    if (quote.id === textNumber) {
      textShow.innerText = "";
      let textWord = quote.text;
      textWord.split("").forEach((character) => {
        const characterSpan = document.createElement("span");
        characterSpan.innerText = character;
        textShow.appendChild(characterSpan);
      });
    }
  });
  textInput.value = null;
  startTimer();
}

function inputTextHandler() {
  const arrayQoute = textShow.querySelectorAll("span");
  const arrayValue = textInput.value.split("");
  let correct = true;
  arrayQoute.forEach(function (characterSpan, index) {
    const character = arrayValue[index];
    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      correct = false;
    } else if (character === characterSpan.innerHTML) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.remove("correct");
      characterSpan.classList.add("incorrect");
      correct = false;
    }
  });

  if (correct) {
    textInput.value = "";
    let textNumber = Math.floor(Math.random() * randomText.length);
    randomText.map(function (quote) {
      if (quote.id === textNumber) {
        textShow.innerText = "";
        let textWord = quote.text;
        textWord.split("").forEach((character) => {
          const characterSpan = document.createElement("span");
          characterSpan.innerText = character;
          textShow.appendChild(characterSpan);
        });
      }
    });
    startTimer();
  }
}

let startTime;
function startTimer() {
  timer.innerHTML = 0;
  startTime = new Date();
  setInterval(() => {
    timer.innerHTML = getTimerTime();
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}
