/**
 * CodeWars Katas Implementation (ES6+)
 * Author: Karma-22 (Darius Ange)
 * GoMyCode Bootcamp - Checkpoint ES6
 * 
 * Solutions to popular 8kyu, 7kyu, 6kyu and 5kyu CodeWars katas
 */

/**
 * Kata 1 (7 kyu): Two to One
 * Prenez 2 chaînes s1 et s2 contenant uniquement des lettres de a à z.
 * Renvoyez une nouvelle chaîne triée, la plus longue possible, contenant des lettres distinctes.
 */
export const twoToOne = (s1 = '', s2 = '') => {
  return [...new Set(`${s1}${s2}`)].sort().join('');
};

/**
 * Kata 2 (6 kyu): Stop gninnipS My sdroW! (Spin Words)
 * Écrivez une fonction qui prend une chaîne d'un ou plusieurs mots,
 * et renvoie la même chaîne, mais avec tous les mots de cinq lettres ou plus inversés.
 */
export const spinWords = (sentence = '') => {
  return sentence
    .split(' ')
    .map((word) => (word.length >= 5 ? [...word].reverse().join('') : word))
    .join(' ');
};

/**
 * Kata 3 (6 kyu): Sum of Digits / Digital Root
 * Une racine numérique est la somme récursive de tous les chiffres d'un nombre.
 * Exemple : 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
 */
export const digitalRoot = (n) => {
  if (n < 10) return n;
  const sum = [...String(n)].reduce((acc, digit) => acc + Number(digit), 0);
  return digitalRoot(sum);
};

/**
 * Kata 4 (6 kyu): Take a Ten Minute Walk
 * Vous arrivez 10 minutes plus tôt à un rendez-vous. La ville est quadrillée.
 * Chaque bloc prend 1 minute. Déterminez si la marche prend exactement 10 minutes
 * et vous ramène au point de départ.
 * directions: array of 'n', 's', 'e', 'w'
 */
export const isValidWalk = (walk = []) => {
  if (walk.length !== 10) return false;
  let ns = 0;
  let ew = 0;
  for (const dir of walk) {
    if (dir === 'n') ns++;
    else if (dir === 's') ns--;
    else if (dir === 'e') ew++;
    else if (dir === 'w') ew--;
  }
  return ns === 0 && ew === 0;
};

/**
 * Kata 5 (6 kyu): Find the missing letter
 * Écrivez une méthode qui prend un tableau de lettres consécutives croissantes
 * et qui renvoie la lettre manquante dans le tableau.
 */
export const findMissingLetter = (array = []) => {
  for (let i = 0; i < array.length - 1; i++) {
    const currentCode = array[i].charCodeAt(0);
    const nextCode = array[i + 1].charCodeAt(0);
    if (nextCode - currentCode > 1) {
      return String.fromCharCode(currentCode + 1);
    }
  }
  return '';
};

/**
 * Kata 6 (5 kyu): RGB To Hex Conversion
 * Complétez la fonction pour que le passage des valeurs décimales RVB renvoie
 * une représentation hexadécimale. Les valeurs hors de [0, 255] doivent être arrondies.
 */
export const rgbToHex = (r, g, b) => {
  const clampAndHex = (val) => {
    const clamped = Math.max(0, Math.min(255, Math.round(val)));
    return clamped.toString(16).toUpperCase().padStart(2, '0');
  };
  return `${clampAndHex(r)}${clampAndHex(g)}${clampAndHex(b)}`;
};

/**
 * Kata 7 (6 kyu): Who likes it? (Facebook-like system)
 * Implémenter le système d'affichage des "likes" avec syntaxe ES6 et template literals.
 */
export const likes = (names = []) => {
  const [first, second, third] = names;
  const count = names.length;
  switch (count) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${first} likes this`;
    case 2:
      return `${first} and ${second} like this`;
    case 3:
      return `${first}, ${second} and ${third} like this`;
    default:
      return `${first}, ${second} and ${count - 2} others like this`;
  }
};
