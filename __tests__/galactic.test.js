import { Galactic } from './../src/js/galactic-age.js';
// import { haikuGenerator } from './../src/js/haiku-generator.js';

describe('Galactic', () => {
  let galactic;
  beforeEach(() => { 
    galactic = new Galactic(31, 21, 100);
  });

  test('should create galactic object with user input age and life expectancy parameters', () => {
    expect(galactic).toEqual({age: 31, past: 21, future: 100});
  });
});

describe('Galactic', () => {
  let galactic;
  beforeEach(() => { 
    galactic = new Galactic(31, 21, 100);
    galactic.calcAge();
  });

  test('should create Galactic method that returns user inputted age in Mercury years.', () => {
    expect(galactic.mercuryAge).toEqual("103.69");
  });
});

