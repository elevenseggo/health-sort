export function SortHeroesByHealth(heroes) {
    if (!Array.isArray(heroes)) {
        throw new Error("heroes must be an array");
    }

    heroes.forEach((hero) => {
        if (!hero || typeof hero !== 'object') {
            throw new Error("hero must be an object");
        }
        if (typeof hero.health !== 'number') {
            throw new Error("heros health must be a number");
        }    
    });

    return [...heroes].sort((a, b) => b.health - a.health);
}