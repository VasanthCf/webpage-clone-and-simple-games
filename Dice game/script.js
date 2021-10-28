"use strict";

// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const overlay = document.querySelector(".overlay");

// setting to initial
diceEl.classList.add("hidden");
score0El.textContent = 0;
score1El.textContent = 0;

let playing = true;

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// doing gaming logics
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // changing the background color.....................

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    // for random number dice.......................
    const dice = Math.trunc(Math.random() * 6) + 1;

    // displaying dice numbers and images...................
    diceEl.classList.remove("hidden");

    diceEl.src = `dice-${dice}.png`;
    // conditions..............
    console.log(dice);
    if (dice !== 1) {
      currentScore += dice;
      // current score for every active player..................
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //changing the active player........................
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // store the current score to the main score...........
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      overlay.classList.remove("hidden1");

      document.querySelector(".winner").textContent = `player ${
        activePlayer + 1
      }`;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  player0El.classList.add("player--active");
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  playing = true;
  activePlayer = 0;
  currentScore = 0;
  score = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  score[activePlayer] = 0;
  diceEl.classList.add("hidden");
  overlay.classList.add("hidden1");
});

overlay.addEventListener("click", function () {
  overlay.classList.add("hidden1");
});
