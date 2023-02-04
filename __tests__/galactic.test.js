import { Galaxy } from './../src/js/galactic-age.js';

describe('Galaxy', () => {
  let galactic;
  beforeEach(() => {
    galactic = new Galaxy(31, 21, 100);
  });

  test('should create an object with user current age, past age and future age parameters', () => {
    expect(galactic).toEqual({ age: 31, past: 21, future: 100 });
  });
});

describe('Galaxy', () => {
  let galactic;
  beforeEach(() => {
    galactic = new Galaxy(31, 21, 100);
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

describe('Galaxy', () => {
  let galactic;
  beforeEach(() => {
    galactic = new Galaxy(31, 21, 100);
    galactic.getAge();
    galactic.getPast();
  });

  test('should determine how many years have passed on Mercury since a past birthday.', () => {
    expect(galactic.mercuryPast).toEqual("41.67");
  });

  test('should determine how many years have passed on Venus since a past birthday.', () => {
    expect(galactic.venusPast).toEqual("16.13");
  });

  test('should determine how many years have passed on Mars since a past birthday.', () => {
    expect(galactic.marsPast).toEqual("5.32");
  });

  test('should determine how many years have passed on Jupiter since a past birthday.', () => {
    expect(galactic.jupiterPast).toEqual("0.84");
  });
});

describe('Galaxy', () => {
  let galactic;
  beforeEach(() => {
    galactic = new Galaxy(31, 21, 100);
    galactic.getAge();
    galactic.getFuture();
  });

  test('should determine how many years have yet to pass on Mercury until a future birthday.', () => {
    expect(galactic.mercuryFuture).toEqual("287.50");
  });

  test('should determine how many years have yet to pass on Venus until a future birthday.', () => {
    expect(galactic.venusFuture).toEqual("111.29");
  });

  test('should determine how many years have yet to pass on Mars until a future birthday.', () => {
    expect(galactic.marsFuture).toEqual("36.70");
  });

  test('should determine how many years have yet to pass on Jupiter until a future birthday.', () => {
    expect(galactic.jupiterFuture).toEqual("5.82");
  });

});
