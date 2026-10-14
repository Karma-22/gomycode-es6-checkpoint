/**
 * GoMyCode Bootcamp - Checkpoint ES6
 * Author: Karma-22 (Darius Ange)
 * Main Entry Point
 */

import * as stringUtils from './algorithms/stringUtils.js';
import * as arrayUtils from './algorithms/arrayUtils.js';
import * as mathLogic from './algorithms/mathLogic.js';
import * as katas from './algorithms/codewarsKatas.js';

console.log('='.repeat(60));
console.log('🚀 GoMyCode Bootcamp - Checkpoint ES6 (Karma-22)');
console.log('='.repeat(60));

// Démonstration String Utils
console.log('\n--- 1. String Utilities ---');
console.log('reverseString("JavaScript ES6"):', stringUtils.reverseString('JavaScript ES6'));
console.log('isPalindrome("kayak"):', stringUtils.isPalindrome('kayak'));
console.log('countVowels("GoMyCode"):', stringUtils.countVowels('GoMyCode'));
console.log('capitalizeWords("bonjour tout le monde"):', stringUtils.capitalizeWords('bonjour tout le monde'));
console.log('maskString("1234567890123456"):', stringUtils.maskString('1234567890123456'));

// Démonstration Array Utils
console.log('\n--- 2. Array Utilities ---');
const numbers = [12, 5, 8, 130, 44, 5, 12];
console.log('Source array:', numbers);
console.log('findMinMax:', arrayUtils.findMinMax(numbers));
console.log('sumArray:', arrayUtils.sumArray(numbers));
console.log('removeDuplicates:', arrayUtils.removeDuplicates(numbers));
console.log('filterEvens:', arrayUtils.filterEvens(numbers));
console.log('chunkArray:', arrayUtils.chunkArray(numbers, 3));

// Démonstration Math Logic
console.log('\n--- 3. Math & Logic ---');
console.log('factorial(5):', mathLogic.factorial(5));
console.log('isPrime(17):', mathLogic.isPrime(17));
console.log('fibonacci(8):', mathLogic.fibonacci(8));
console.log('fizzBuzz(15):', mathLogic.fizzBuzz(15));

// Démonstration CodeWars Katas
console.log('\n--- 4. CodeWars Katas (300 points) ---');
console.log('twoToOne("xyaabbbccccdefww", "xxxxyyyyabklmopq"):', katas.twoToOne('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));
console.log('spinWords("Hey fellow warriors"):', katas.spinWords('Hey fellow warriors'));
console.log('digitalRoot(942):', katas.digitalRoot(942));
console.log('rgbToHex(255, 99, 71):', katas.rgbToHex(255, 99, 71));
console.log('likes(["Alex", "Jacob", "Mark", "Max"]):', katas.likes(['Alex', 'Jacob', 'Mark', 'Max']));

console.log('\n✅ Tous les modules ES6 ont été exécutés avec succès !');
