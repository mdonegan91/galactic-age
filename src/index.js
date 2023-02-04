import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Galaxy } from './js/galactic-age.js';

function blastOff(event) {
  event.preventDefault();
  const newAge = document.getElementById("current").value;
  const newPast = document.getElementById("past").value;
  const newFuture = document.getElementById("future").value;
  const planet = document.querySelector("input[name='planet']:checked").value;
  let galactic = new Galaxy(newAge, newPast, newFuture);
  galactic.getAge();
  galactic.getPast();
  galactic.getFuture();
  document.getElementById("reset").setAttribute("class", "show");
  if (planet === "mercury") {
    document.getElementById("mercury-trip").setAttribute("class", "show");
    document.querySelector("img#mercury-img").setAttribute("class", "show");
    document.getElementById("mercury-age").innerText = galactic.mercuryAge;
    document.getElementById("mercury-past-age").innerText = galactic.mercuryPast;
    document.getElementById("mercury-future-age").innerText = galactic.mercuryFuture;
  } else if (planet === "venus") {
    document.getElementById("venus-trip").setAttribute("class", "show");
    document.querySelector("img#venus-img").setAttribute("class", "show");
    document.getElementById("venus-age").innerText = galactic.venusAge;
    document.getElementById("venus-past-age").innerText = galactic.venusPast;
    document.getElementById("venus-future-age").innerText = galactic.venusFuture;
  } else if (planet === "mars") {
    document.querySelector("div#mars-trip").setAttribute("class", "show");
    document.querySelector("img#mars-img").setAttribute("class", "show");
    document.getElementById("mars-age").innerText = galactic.marsAge;
    document.getElementById("mars-past-age").innerText = galactic.marsPast;
    document.getElementById("mars-future-age").innerText = galactic.marsFuture;
  } else if (planet === "jupiter") {
    document.querySelector("div#jupiter-trip").setAttribute("class", "show");
    document.querySelector("img#jupiter-img").setAttribute("class", "show");
    document.getElementById("jupiter-age").innerText = galactic.jupiterAge;
    document.getElementById("jupiter-past-age").innerText = galactic.jupiterPast;
    document.getElementById("jupiter-future-age").innerText = galactic.jupiterFuture;
  }
  document.getElementById("submit").disabled = true;
  document.getElementById("reset").disabled = false;
}

function backToEarth() {
  document.getElementById("submit").disabled = false;
  document.getElementById("reset").disabled = true;
  document.getElementById("reset").setAttribute("class", "hidden");
  document.getElementById("mercury-trip").setAttribute("class", "hidden");
  document.getElementById("venus-trip").setAttribute("class", "hidden");
  document.getElementById("mars-trip").setAttribute("class", "hidden");
  document.getElementById("jupiter-trip").setAttribute("class", "hidden");
  document.querySelector("img#mercury-img").setAttribute("class", "hidden");
  document.querySelector("img#venus-img").setAttribute("class", "hidden");
  document.querySelector("img#mars-img").setAttribute("class", "hidden");
  document.querySelector("img#jupiter-img").setAttribute("class", "hidden");
}

window.addEventListener("load", function () {
  document.querySelector("form#age").addEventListener("submit", blastOff);
  document.querySelector("button.delete").addEventListener("click", backToEarth);
});