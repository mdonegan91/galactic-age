import { Galactic } from './../src/js/galactic-age.js';

describe('Galactic', () => {
  let galactic;
  beforeEach(() => {
    galactic = new Galactic(31, 21, 100);
  });

  test('should create an object with user current age, past age and future age parameters', () => {
    expect(galactic).toEqual({ age: 31, past: 21, future: 100 });
  });
});

describe('Galactic', () => {
  let galactic;
  beforeEach(() => {
    galactic = new Galactic(31, 21, 100);
    galactic.getAge();
  });

  test('should create a method that returns user inputted age in Mercury years.', () => {
    expect(galactic.mercuryAge).toEqual("129.17");
  });
});

