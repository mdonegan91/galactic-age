import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Galactic } from './js/galactic-age.js';

function handleForm(e) {
  e.preventDefault();
  const ageInput = document.getElementById("age").value;
  const pastInput = document.getElementById("past").value;
  const futureInput = document.getElementById("future").value;
}

let galactic = new Galactic(ageInput, pastInput, futureInput)

window.addEventListener("load", function () {
  this.document.querySelector("form#age").addEventListener("submit", handleForm);
})