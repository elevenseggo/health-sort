import { SortHeroesByHealth } from "./sort";

const heroes = [
      {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

try {
    const sorted = SortHeroesByHealth(heroes);
    console.log('input', heroes);
    console.log('sorted array', sorted);
} catch (error) {
    console.error('Ошибка:', error.message)
}

export { SortHeroesByHealth };
