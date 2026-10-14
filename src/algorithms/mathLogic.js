/**
 * ES6 Math & Logic Katas
 * Author: Karma-22 (Darius Ange)
 * GoMyCode Bootcamp - ES6 Checkpoint
 */

// 1. Calculer la factorielle d'un nombre (Recursion + Ternary operator)
export const factorial = (n) => {
  if (n < 0) throw new Error('Le factoriel ne peut pas être négatif');
  return n <= 1 ? 1 : n * factorial(n - 1);
};

// 2. Vérifier si un nombre est premier
export const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

// 3. Suite de Fibonacci jusqu'à N termes (ES6 Array.from / loop)
export const fibonacci = (n = 1) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const seq = [0, 1];
  while (seq.length < n) {
    const [prev2, prev1] = seq.slice(-2);
    seq.push(prev2 + prev1);
  }
  return seq;
};

// 4. FizzBuzz classique réécrit avec ES6 Map / Ternary
export const fizzBuzz = (limit = 15) => {
  return Array.from({ length: limit }, (_, i) => {
    const num = i + 1;
    let res = '';
    if (num % 3 === 0) res += 'Fizz';
    if (num % 5 === 0) res += 'Buzz';
    return res || num;
  });
};

// 5. PGCD (Plus Grand Commun Diviseur - Algorithme d'Euclide)
export const gcd = (a, b) => (!b ? a : gcd(b, a % b));
