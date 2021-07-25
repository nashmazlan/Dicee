alert("Let's settle this! Refresh Me!);
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomeDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomeDiceImage2);


if (randomNumber1 > randomNumber2) {
  document.querySelectorAll("h1")[0].innerHTML = "Option 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelectorAll("h1")[0].innerHTML = "Option 2 Wins";
} else if (randomNumber1 == randomNumber2) {
  document.querySelectorAll("h1")[0].innerHTML = "Draw! Roll Again~"
}



