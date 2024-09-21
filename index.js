
var dice1 = document.querySelector("img"); 
var dice2 = document.querySelector("img.img2"); 
var heading = document.querySelector("h1");


window.onload = function diceOne () {
  const images = [];
  var randomNumber1 = Math.floor(Math.random()*6) + 1; 
  var randomNumber2 = Math.floor(Math.random()*6) + 1; 

  if (randomNumber1 === 1) {
    document.querySelector("img").src="./images/dice1.png";
     }
  
  if (randomNumber1 === 2) {
    document.querySelector("img").src="./images/dice2.png";
  }
  
  if (randomNumber1 === 3) {
    document.querySelector("img").src="./images/dice3.png";
  }
  
  if (randomNumber1 === 4) {
    document.querySelector("img").src="./images/dice4.png";
  }
  
  if (randomNumber1 === 5) {
    document.querySelector("img").src="./images/dice5.png";
  }
  
  if (randomNumber1 === 6) {
    document.querySelector("img").src="./images/dice6.png";
  }

  if (randomNumber2 === 1) {
    document.querySelector("img.img2").src="./images/dice1.png";
  }
  
  if (randomNumber2 === 2) {
    document.querySelector("img.img2").src="./images/dice2.png";
  }
  
  if (randomNumber2 === 3) {
    document.querySelector("img.img2").src="./images/dice3.png";
  }
  
  if (randomNumber2 === 4) {
    document.querySelector("img.img2").src="./images/dice4.png";
  }
  
  if (randomNumber2 === 5) {
    document.querySelector("img.img2").src="./images/dice5.png";
  }
  
  if (randomNumber2 === 6) {
    document.querySelector("img.img2").src="./images/dice6.png";
  }

if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}

if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML="Draw!";
}

}

