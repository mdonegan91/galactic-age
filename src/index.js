import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Galactic } from './js/galactic-age.js';

function blastOff() {
  let galactic = new Galactic (age, past, future);
  e.preventDefault();
  let randomHaiku = haikuGenerator();
  document.getElementById("line1").innerText = randomHaiku[0];
  document.getElementById("line2").innerText = randomHaiku[1];
  document.getElementById("line3").innerText = randomHaiku[2];
}

window.addEventListener("load", function () {
  document.querySelector("form#new-form").addEventListener("submit", handleFormSubmission);
  document.getElementById("generate").addEventListener("click", blastOff);
});
