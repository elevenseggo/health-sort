import { SortHeroesByHealth } from '../src/sort.js';

describe('SortHeroesByHealth', () => {
  test('sort heroes by health', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = SortHeroesByHealth(heroes);

expect(result[0]).toBe(heroes[1]); 
  expect(result[1]).toBe(heroes[2]); 
  expect(result[2]).toBe(heroes[0]); 
  
  expect(result).toEqual(expected);
  });

  test('already sorted array', () => {
    const heroes = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = SortHeroesByHealth(heroes);
    expect(result).toEqual(heroes);
  });

  test('not sorted array', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'лучник', health: 80 },
      { name: 'маг', health: 100 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(SortHeroesByHealth(heroes)).toEqual(expected);
  });


  test('equal health', () => {
    const heroes = [
      { name: 'маг', health: 50 },
      { name: 'лучник', health: 50 },
      { name: 'мечник', health: 50 },
    ];

    const result = SortHeroesByHealth(heroes);
    expect(result).toEqual(heroes);
  });

  test('negative health', () => {
    const heroes = [
      { name: 'маг', health: -10 },
      { name: 'лучник', health: 50 },
      { name: 'мечник', health: -100 },
    ];

    const expected = [
      { name: 'лучник', health: 50 },
      { name: 'маг', health: -10 },
      { name: 'мечник', health: -100 },
    ];

    expect(SortHeroesByHealth(heroes)).toEqual(expected);
  });

  test('single hero', () => {
    const heroes = [{ name: 'маг', health: 100 }];
    expect(SortHeroesByHealth(heroes)).toEqual(heroes);
  });

  test('empty array', () => {
    expect(SortHeroesByHealth([])).toEqual([]);
  });

  test('should not сhange original array', () => {
    const originalHeroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];

    const copy = [...originalHeroes];
     const hero1 = originalHeroes[0];
  const hero2 = originalHeroes[1];
  
  SortHeroesByHealth(originalHeroes);

  expect(originalHeroes).toEqual([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ]);
  
  expect(originalHeroes[0]).toBe(hero1);
  expect(originalHeroes[1]).toBe(hero2);
  
  expect(originalHeroes).not.toBe(copy); 
  expect(originalHeroes).toEqual(copy);  
});


  describe('input validation', () => {
    test('non-array input', () => {
      expect(() => SortHeroesByHealth(null)).toThrow('heroes must be an array');
      expect(() => SortHeroesByHealth(undefined)).toThrow('heroes must be an array');
      expect(() => SortHeroesByHealth('string')).toThrow('heroes must be an array');
      expect(() => SortHeroesByHealth(123)).toThrow('heroes must be an array');
      expect(() => SortHeroesByHealth({})).toThrow('heroes must be an array');
    });

    test('non-object hero', () => {
      const heroes = [
        { name: 'маг', health: 100 },
        null,
        { name: 'лучник', health: 80 },
      ];

      expect(() => SortHeroesByHealth(heroes)).toThrow('hero must be an object');
    });

    test('hero without health', () => {
      const heroes = [
        { name: 'маг', health: 100 },
        { name: 'лучник' }, 
      ];

      expect(() => SortHeroesByHealth(heroes)).toThrow('heros health must be a number');
    });

    test('not a number health', () => {
      const heroes = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: '80' }, 
      ];

      expect(() => SortHeroesByHealth(heroes)).toThrow('heros health must be a number');
    });
  });
   });