export class Galactic {
  constructor(age, past, future) {
    this.age = age
    this.past = past
    this.future = future
  }


  getAge() {
    this.mercuryAge = (this.age / .24).toFixed(2);
  }
}


// 54.16 Mercury years have passed.
// 8.06 Venus years have passed.
// 6.91 Mars years have passed.
// 1.09 Jupiter years have passed.