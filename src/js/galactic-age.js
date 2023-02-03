export class Galactic {
  constructor(age, past, future) {
    this.age = age
    this.past = past
    this.future = future
  }

  getAge() {
    this.mercuryAge = (this.age / .24).toFixed(2);
    this.venusAge = (this.age / .62).toFixed(2);
    this.marsAge = (this.age / 1.88).toFixed(2);
    this.jupiterAge = (this.age / 11.86).toFixed(2);
  }

  getPast() {
    this.mercuryPast = (((this.age - this.past) / .24).toFixed(2));
  }

}