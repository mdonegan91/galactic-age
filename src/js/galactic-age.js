export class Galaxy {
  constructor(age, past, future) {
    this.age = age;
    this.past = past;
    this.future = future;
  }

  getAge() {
    this.mercuryAge = (this.age / .24).toFixed(2);
    this.venusAge = (this.age / .62).toFixed(2);
    this.marsAge = (this.age / 1.88).toFixed(2);
    this.jupiterAge = (this.age / 11.86).toFixed(2);
  }

  getPast() {
    this.mercuryPast = (((this.age - this.past) / .24).toFixed(2));
    this.venusPast = (((this.age - this.past) / .62).toFixed(2));
    this.marsPast = (((this.age - this.past) / 1.88).toFixed(2));
    this.jupiterPast = (((this.age - this.past) / 11.86).toFixed(2));
  }

  getFuture() {
    this.mercuryFuture = (((this.future - this.age) / .24).toFixed(2));
    this.venusFuture = (((this.future - this.age) / .62).toFixed(2));
    this.marsFuture = (((this.future - this.age) / 1.88).toFixed(2));
    this.jupiterFuture = (((this.future - this.age) / 11.86).toFixed(2));
  }

}