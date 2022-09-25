// generate random number b/w 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// display winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "It's a Draw!";
}

// change image for dice-1
if (randomNumber1 === 1) {
  document.querySelector("img.img1").setAttribute("src", "images\\dice1.png");
} else if (randomNumber1 === 2) {
  document.querySelector("img.img1").setAttribute("src", "images\\dice2.png");
} else if (randomNumber1 === 3) {
  document.querySelector("img.img1").setAttribute("src", "images\\dice3.png");
} else if (randomNumber1 === 4) {
  document.querySelector("img.img1").setAttribute("src", "images\\dice4.png");
} else if (randomNumber1 === 5) {
  document.querySelector("img.img1").setAttribute("src", "images\\dice5.png");
} else if (randomNumber1 === 6) {
  document.querySelector("img.img1").setAttribute("src", "images\\dice6.png");
}

// chnage image for dice-2
if (randomNumber2 === 1) {
  document.querySelector("img.img2").setAttribute("src", "images\\dice1.png");
} else if (randomNumber2 === 2) {
  document.querySelector("img.img2").setAttribute("src", "images\\dice2.png");
} else if (randomNumber2 === 3) {
  document.querySelector("img.img2").setAttribute("src", "images\\dice3.png");
} else if (randomNumber2 === 4) {
  document.querySelector("img.img2").setAttribute("src", "images\\dice4.png");
} else if (randomNumber2 === 5) {
  document.querySelector("img.img2").setAttribute("src", "images\\dice5.png");
} else if (randomNumber2 === 6) {
  document.querySelector("img.img2").setAttribute("src", "images\\dice6.png");
}
