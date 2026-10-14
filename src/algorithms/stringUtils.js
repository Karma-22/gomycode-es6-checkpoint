/**
 * ES6 String Utilities & Katas
 * Author: Karma-22 (Darius Ange)
 * GoMyCode Bootcamp - ES6 Checkpoint
 */

// 1. Inverser une chaîne de caractères (Arrow function + Spread operator)
export const reverseString = (str = '') => [...str].reverse().join('');

// 2. Vérifier si un mot est un palindrome (ignorant la casse et les caractères spéciaux)
export const isPalindrome = (str = '') => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === [...cleaned].reverse().join('');
};

// 3. Compter le nombre de voyelles dans une chaîne
export const countVowels = (str = '') => {
  const matches = str.match(/[aeiouy]/gi);
  return matches ? matches.length : 0;
};

// 4. Mettre en majuscule la première lettre de chaque mot (Capitalize Words)
export const capitalizeWords = (sentence = '') =>
  sentence
    .split(' ')
    .filter(Boolean)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join(' ');

// 5. Tronquer un texte avec points de suspension (Default parameters + Template literals)
export const truncateText = (text = '', maxLength = 30, suffix = '...') =>
  text.length > maxLength ? `${text.slice(0, maxLength)}${suffix}` : text;

// 6. Masquer une chaîne sensible (ex: numéro de carte ou email) en gardant les N derniers caractères
export const maskString = (str = '', unmaskedCount = 4, maskChar = '*') => {
  if (str.length <= unmaskedCount) return str;
  const maskedSection = maskChar.repeat(str.length - unmaskedCount);
  const visibleSection = str.slice(-unmaskedCount);
  return `${maskedSection}${visibleSection}`;
};
