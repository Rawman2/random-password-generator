const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordLength = 15;
let btn = document.getElementById("btn");
btn.addEventListener("click", generateRandomPassword);

let outCome1 = document.getElementById("outcome1");
let outCome2 = document.getElementById("outcome2");
outCome1.addEventListener("click", displayChosenNum);
outCome2.addEventListener("click", displayChosenNum);
let chosenPassword = document.getElementById("chosenPassword");
function getRandomCharacter() {
  let randomIndex = Math.floor(Math.random() * characters.length);
  let randomChar = characters[randomIndex];
  return randomChar;
}

function generate15RandomNum() {
  let value = "";
  for (let i = 0; i < passwordLength; i++) {
    value += getRandomCharacter();
  }
  return value;
}
generate15RandomNum();

function generateRandomPassword() {
  outCome1.textContent = generate15RandomNum();
  outCome2.textContent = generate15RandomNum();
}

function displayChosenNum(event) {
  chosenPassword.textContent = generateRandomPassword();
  let savedPword = event.target.textContent;
  chosenPassword.textContent = savedPword;
}
