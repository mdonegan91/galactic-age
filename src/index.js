import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Galactic } from './js/galactic-age.js';

function blastOff(event) {
  event.preventDefault();
  const newAge = document.getElementById("age").value;
  const newPast = document.getElementById("past").value;
  const newFuture = document.getElementById("future").value;
  const planet = document.querySelector("input[name='planet']:checked").value;
  let galactic = new Galactic(newAge, newPast, newFuture);
  galactic.getAge();
  galactic.getPast();
  galactic.getFuture();

  if (planet === "mercury") {

  document.querySelector("div#mercury-trip").removeAttribute("class", "hidden");
  document.getElementById("mercury-age").innerText = galactic.mercuryAge;
  document.getElementById("mercury-past-age").innerText = galactic.mercuryPast;
  document.getElementById("mercury-future-age").innerText = galactic.mercuryFuture;
  } else if (planet === "venus") {

  document.querySelector("div#venus-trip").removeAttribute("class", "hidden");
  document.getElementById("venus-age").innerText = galactic.venusAge;
  document.getElementById("venus-past-age").innerText = galactic.venusPast;
  document.getElementById("venus-future-age").innerText = galactic.venusFuture;
  } else if (planet === "mars") {

  document.querySelector("div#mars-trip").removeAttribute("class", "hidden");
  document.getElementById("mars-age").innerText = galactic.marsAge;
  document.getElementById("mars-past-age").innerText = galactic.marsPast;
  document.getElementById("mars-future-age").innerText = galactic.marsFuture;
  } else if (planet === "jupiter") {

  document.querySelector("div#jupiter-trip").removeAttribute("class", "hidden");
  document.getElementById("jupiter-age").innerText = galactic.jupiterAge;
  document.getElementById("jupiter-past-age").innerText = galactic.jupiterPast;
  document.getElementById("jupiter-future-age").innerText = galactic.jupiterFuture;
}
}

function backToEarth() {
  document.querySelector("button.reset").removeAttribute("id");
  document.querySelector("div#results").setAttribute("class", "hidden");
  document.getElementById("submit").disabled = false;
  document.getElementById("reset").disabled = false;
}

window.addEventListener("load", function () {
  document.querySelector("form#age").addEventListener("submit", blastOff);
  document.querySelector("button.reset").addEventListener("click", backToEarth);
});