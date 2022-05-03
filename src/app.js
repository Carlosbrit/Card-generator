/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").innerHTML = genrateRandomSuite();
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexValues = Math.floor(Math.random() * values.length);

  return values[indexValues];
};
let genrateRandomSuite = () => {
  let suite = ["diamond", "spade", "heart", "club"];
  let indexSuites = Math.floor(Math.random() * suite.length);
  return suite[indexSuites];
};
