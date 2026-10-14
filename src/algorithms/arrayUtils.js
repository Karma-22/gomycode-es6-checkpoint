/**
 * ES6 Array Utilities & Higher-Order Functions
 * Author: Karma-22 (Darius Ange)
 * GoMyCode Bootcamp - ES6 Checkpoint
 */

// 1. Trouver le minimum et le maximum (Spread operator + Math)
export const findMinMax = (arr = []) => {
  if (!arr.length) return { min: null, max: null };
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
};

// 2. Calculer la somme d'un tableau de nombres (reduce)
export const sumArray = (arr = []) => arr.reduce((acc, curr) => acc + curr, 0);

// 3. Calculer la moyenne (reduce + division)
export const averageArray = (arr = []) => (arr.length ? sumArray(arr) / arr.length : 0);

// 4. Supprimer les doublons dans un tableau (ES6 Set)
export const removeDuplicates = (arr = []) => [...new Set(arr)];

// 5. Filtrer les nombres pairs / impairs (Arrow functions + filter)
export const filterEvens = (arr = []) => arr.filter((n) => n % 2 === 0);
export const filterOdds = (arr = []) => arr.filter((n) => n % 2 !== 0);

// 6. Aplatir un tableau multidimensionnel (Flat / FlatMap)
export const flattenArray = (arr = [], depth = Infinity) => arr.flat(depth);

// 7. Découper un tableau en sous-tableaux de taille N (Chunking)
export const chunkArray = (arr = [], size = 1) => {
  if (size <= 0) return [];
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

// 8. Trier un tableau d'objets selon une clé spécifique (avec destructuring)
export const sortByProperty = (arr = [], key, ascending = true) => {
  return [...arr].sort((a, b) => {
    const valA = a?.[key];
    const valB = b?.[key];
    if (valA < valB) return ascending ? -1 : 1;
    if (valA > valB) return ascending ? 1 : -1;
    return 0;
  });
};

// 9. Grouper les éléments par propriété (Object.groupBy / reduce ES6)
export const groupBy = (arr = [], keyGetter) => {
  return arr.reduce((acc, item) => {
    const key = typeof keyGetter === 'function' ? keyGetter(item) : item[keyGetter];
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
};
