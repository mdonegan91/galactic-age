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

  test('should return user inputted age in Mercury years.', () => {
    expect(galactic.mercuryAge).toEqual("129.17");
  });

  test('should return user inputted age in Venus years.', () => {
    expect(galactic.venusAge).toEqual("50.00");
  });

  test('should return user inputted age in Mars years.', () => {
    expect(galactic.marsAge).toEqual("16.49");
  });

  test('should return user inputted age in Jupiter years.', () => {
    expect(galactic.jupiterAge).toEqual("2.61");
  });
});

describe('Galactic', () => {
  let galactic;
  beforeEach(() => {
    galactic = new Galactic(31, 21, 100);
    galactic.getAge();
    galactic.getPast();
  });

  test('should determine how many years have passed on Merucry since a past birthday.', () => {
    expect(galactic.mercuryPast).toEqual(311.08);
});
});
