import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Galactic } from './js/galactic-age.js';

function blastOff(e) {
  e.preventDefault();
  const newAge = document.getElementById("age").value;
  const newPast = document.getElementById("past").value;
  const newFuture = document.getElementById("future").value;
  const planet = document.querySelector("input[name='planet']:checked").value;
  const paragraph = document.createElement("p");
  const h2 = document.createElement("h2");

  let galactic = new Galactic(newAge, newPast, newFuture);

  h2.append("Blasting Off!");
  paragraph.append(`Your age on ${planet} is ${galactic.getAge(planet)} years. ${planet} years since your favorite age: ${galactic.getPast(planet)}. Years until your favorite age: ${galactic.getFuture(planet)}`);

  document.body.append(h2, paragraph);
}

window.addEventListener("load", function () {
  document.querySelector("form#age").addEventListener("submit", blastOff);
});