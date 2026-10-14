import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import * as stringUtils from '../src/algorithms/stringUtils.js';
import * as arrayUtils from '../src/algorithms/arrayUtils.js';
import * as mathLogic from '../src/algorithms/mathLogic.js';
import * as katas from '../src/algorithms/codewarsKatas.js';

describe('1. String Utilities Tests', () => {
  it('should reverse a string correctly', () => {
    assert.equal(stringUtils.reverseString('hello'), 'olleh');
  });

  it('should correctly identify palindromes', () => {
    assert.equal(stringUtils.isPalindrome('kayak'), true);
    assert.equal(stringUtils.isPalindrome('A man, a plan, a canal: Panama'), true);
    assert.equal(stringUtils.isPalindrome('hello'), false);
  });

  it('should count vowels correctly', () => {
    assert.equal(stringUtils.countVowels('GoMyCode Bootcamp'), 7);
  });

  it('should capitalize each word in a sentence', () => {
    assert.equal(stringUtils.capitalizeWords('hello world from es6'), 'Hello World From Es6');
  });

  it('should truncate text properly', () => {
    assert.equal(stringUtils.truncateText('Short text', 20), 'Short text');
    assert.equal(stringUtils.truncateText('This is a very long text to be truncated', 10), 'This is a ...');
  });

  it('should mask sensitive strings', () => {
    assert.equal(stringUtils.maskString('1234567812345678', 4), '************5678');
  });
});

describe('2. Array Utilities Tests', () => {
  it('should find min and max', () => {
    const res = arrayUtils.findMinMax([10, -5, 23, 0, 42]);
    assert.deepEqual(res, { min: -5, max: 42 });
  });

  it('should sum and average an array', () => {
    assert.equal(arrayUtils.sumArray([1, 2, 3, 4, 5]), 15);
    assert.equal(arrayUtils.averageArray([10, 20, 30]), 20);
  });

  it('should remove duplicates', () => {
    assert.deepEqual(arrayUtils.removeDuplicates([1, 2, 2, 3, 4, 4, 1]), [1, 2, 3, 4]);
  });

  it('should filter even and odd numbers', () => {
    assert.deepEqual(arrayUtils.filterEvens([1, 2, 3, 4, 5, 6]), [2, 4, 6]);
    assert.deepEqual(arrayUtils.filterOdds([1, 2, 3, 4, 5, 6]), [1, 3, 5]);
  });

  it('should chunk an array', () => {
    assert.deepEqual(arrayUtils.chunkArray([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
  });
});

describe('3. Math & Logic Tests', () => {
  it('should calculate factorial', () => {
    assert.equal(mathLogic.factorial(0), 1);
    assert.equal(mathLogic.factorial(5), 120);
  });

  it('should detect prime numbers', () => {
    assert.equal(mathLogic.isPrime(2), true);
    assert.equal(mathLogic.isPrime(17), true);
    assert.equal(mathLogic.isPrime(18), false);
    assert.equal(mathLogic.isPrime(1), false);
  });

  it('should generate fibonacci sequence', () => {
    assert.deepEqual(mathLogic.fibonacci(7), [0, 1, 1, 2, 3, 5, 8]);
  });

  it('should handle FizzBuzz correctly', () => {
    const fb = mathLogic.fizzBuzz(5);
    assert.deepEqual(fb, [1, 2, 'Fizz', 4, 'Buzz']);
  });
});

describe('4. CodeWars Katas Tests', () => {
  it('Kata Two to One should merge distinct sorted chars', () => {
    assert.equal(katas.twoToOne('xyaabbbccccdefww', 'xxxxyyyyabklmopq'), 'abcdefklmopqwxy');
  });

  it('Kata Spin Words should reverse words of length >= 5', () => {
    assert.equal(katas.spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
    assert.equal(katas.spinWords('This is a test'), 'This is a test');
  });

  it('Kata Digital Root should compute recursive sum', () => {
    assert.equal(katas.digitalRoot(16), 7);
    assert.equal(katas.digitalRoot(942), 6);
    assert.equal(katas.digitalRoot(132189), 6);
  });

  it('Kata Valid Walk should check exactly 10 minutes loop', () => {
    assert.equal(katas.isValidWalk(['n','s','n','s','n','s','n','s','n','s']), true);
    assert.equal(katas.isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), false);
    assert.equal(katas.isValidWalk(['w']), false);
    assert.equal(katas.isValidWalk(['n','n','n','s','n','s','n','s','n','s']), false);
  });

  it('Kata Find Missing Letter', () => {
    assert.equal(katas.findMissingLetter(['a','b','c','d','f']), 'e');
    assert.equal(katas.findMissingLetter(['O','Q','R','S']), 'P');
  });

  it('Kata RGB to Hex conversion', () => {
    assert.equal(katas.rgbToHex(255, 255, 255), 'FFFFFF');
    assert.equal(katas.rgbToHex(255, 255, 300), 'FFFFFF');
    assert.equal(katas.rgbToHex(0, 0, 0), '000000');
    assert.equal(katas.rgbToHex(148, 0, 211), '9400D3');
  });

  it('Kata Who Likes It', () => {
    assert.equal(katas.likes([]), 'no one likes this');
    assert.equal(katas.likes(['Peter']), 'Peter likes this');
    assert.equal(katas.likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    assert.equal(katas.likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    assert.equal(katas.likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});
