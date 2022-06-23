// let outCome1 = document.getElementById("outcome1");
// let outCome2 = document.getElementById("outcome2");
// let passwordLength = 15;
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", generateRandomPassword);
// let clickedPassword1 = document.getElementById("outcome1");
// let clickedPassword2 = document.getElementById("outcome2");
// let displayChosenPword = document.getElementById("chosenPassword");
// clickedPassword1.addEventListener("click", getClickedPassword);
// clickedPassword2.addEventListener("click", getClickedPassword);
// function getRandomCharacter() {
//   let randomChar = Math.floor(Math.random() * characters.length);
//   return characters[randomChar];
// }

// function generateRandomPassword() {
//   let randomPassword = getRandom();
//   let randomPassword2 = getRandom();

//   outCome1.textContent = randomPassword;
//   outCome2.textContent = randomPassword2;
//   return [randomPassword, randomPassword2];
// }
// function getRandom() {
//   let value = "";
//   for (let i = 0; i < passwordLength; i++) {
//     value += getRandomCharacter();
//   }
//   return value;
// }
// function getClickedPassword(event) {
//   //   displayChosenPword.textContent = generateRandomPassword();
//   let savedPword = event.target.textContent;
//   displayChosenPword.textContent = savedPword;
// }
