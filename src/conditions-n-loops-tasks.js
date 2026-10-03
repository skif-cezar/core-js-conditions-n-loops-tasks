/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let maxNumber = a;

  if (maxNumber < b) {
    maxNumber = b;
  }

  if (maxNumber < c) {
    maxNumber = c;
  }

  return maxNumber;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const dx = Math.abs(queen.x - king.x);
  const dy = Math.abs(queen.y - king.y);

  return queen.x === king.x || queen.y === king.y || dx === dy;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b || a === c || b === c) {
      return true;
    }
    return false;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const tens = ['', 'X', 'XX', 'XXX'];
  const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  return tens[Math.floor(num / 10)] + ones[num % 10];
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    let word = '';

    switch (numberStr[i]) {
      case '0':
        word = 'zero';
        break;
      case '1':
        word = 'one';
        break;
      case '2':
        word = 'two';
        break;
      case '3':
        word = 'three';
        break;
      case '4':
        word = 'four';
        break;
      case '5':
        word = 'five';
        break;
      case '6':
        word = 'six';
        break;
      case '7':
        word = 'seven';
        break;
      case '8':
        word = 'eight';
        break;
      case '9':
        word = 'nine';
        break;
      case '-':
        word = 'minus';
        break;
      case '.':
      case ',':
        word = 'point';
        break;
      default:
        word = numberStr[i];
        break;
    }

    if (i > 0) {
      result += ' ';
    }
    result += word;
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let current = num < 0 ? -num : num;

  if (current === 0) {
    return digit === 0;
  }

  while (current > 0) {
    const lastDigit = current % 10;

    if (lastDigit === digit) {
      return true;
    }
    current = (current - lastDigit) / 10;
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let totalSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    totalSum += arr[i];
  }

  let leftSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const rightSum = totalSum - leftSum - arr[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }

  let value = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (top <= bottom && left <= right) {
    for (let col = left; col <= right; col += 1) {
      matrix[top][col] = value;
      value += 1;
    }
    top += 1;

    for (let row = top; row <= bottom; row += 1) {
      matrix[row][right] = value;
      value += 1;
    }
    right -= 1;

    if (top <= bottom) {
      for (let col = right; col >= left; col -= 1) {
        matrix[bottom][col] = value;
        value += 1;
      }
      bottom -= 1;
    }

    if (left <= right) {
      for (let row = bottom; row >= top; row -= 1) {
        matrix[row][left] = value;
        value += 1;
      }
      left += 1;
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const arr = matrix;
  const n = arr.length;

  for (let layer = 0; layer < Math.floor(n / 2); layer += 1) {
    const first = layer;
    const last = n - 1 - layer;

    for (let i = first; i < last; i += 1) {
      const offset = i - first;
      const top = arr[first][i];

      arr[first][i] = arr[last - offset][first];
      arr[last - offset][first] = arr[last][last - offset];
      arr[last][last - offset] = arr[i][last];
      arr[i][last] = top;
    }
  }

  return arr;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const result = arr;
  if (result.length <= 1) return result;

  const stack = [];
  let top = -1;

  top += 1;
  stack[top] = 0;
  top += 1;
  stack[top] = result.length - 1;

  while (top >= 0) {
    const high = stack[top];
    top -= 1;
    const low = stack[top];
    top -= 1;

    if (low < high) {
      const mid = Math.floor(low + (high - low) / 2);

      if (result[low] > result[mid]) {
        const temp = result[low];
        result[low] = result[mid];
        result[mid] = temp;
      }
      if (result[low] > result[high]) {
        const temp = result[low];
        result[low] = result[high];
        result[high] = temp;
      }
      if (result[mid] > result[high]) {
        const temp = result[mid];
        result[mid] = result[high];
        result[high] = temp;
      }

      const pivotTemp = result[mid];
      result[mid] = result[low];
      result[low] = pivotTemp;

      const pivot = result[low];

      let lt = low;
      let gt = high;
      let i = low + 1;

      while (i <= gt) {
        if (result[i] < pivot) {
          const temp = result[lt];
          result[lt] = result[i];
          result[i] = temp;
          lt += 1;
          i += 1;
        } else if (result[i] > pivot) {
          const temp = result[i];
          result[i] = result[gt];
          result[gt] = temp;
          gt -= 1;
        } else {
          i += 1;
        }
      }

      if (gt + 1 - low > high - (gt + 1)) {
        if (lt - 1 > low) {
          top += 1;
          stack[top] = low;
          top += 1;
          stack[top] = lt - 1;
        }
        if (high > gt + 1) {
          top += 1;
          stack[top] = gt + 1;
          top += 1;
          stack[top] = high;
        }
      } else {
        if (high > gt + 1) {
          top += 1;
          stack[top] = gt + 1;
          top += 1;
          stack[top] = high;
        }
        if (lt - 1 > low) {
          top += 1;
          stack[top] = low;
          top += 1;
          stack[top] = lt - 1;
        }
      }
    }
  }

  return result;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let currentStr = str;
  let cycle = 0;

  for (let i = 1; i <= iterations; i += 1) {
    let evens = '';
    let odds = '';

    for (let j = 0; j < currentStr.length; j += 1) {
      if (j % 2 === 0) {
        evens += currentStr[j];
      } else {
        odds += currentStr[j];
      }
    }

    currentStr = evens + odds;

    if (currentStr === str) {
      cycle = i;
      break;
    }
  }

  const remainingIterations = cycle > 0 ? iterations % cycle : 0;

  for (let i = 0; i < remainingIterations; i += 1) {
    let evens = '';
    let odds = '';

    for (let j = 0; j < currentStr.length; j += 1) {
      if (j % 2 === 0) {
        evens += currentStr[j];
      } else {
        odds += currentStr[j];
      }
    }

    currentStr = evens + odds;
  }

  return currentStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(number) {
  const digits = [];
  let temp = number;

  while (temp > 0) {
    const digit = temp % 10;
    digits[digits.length] = digit;
    temp = (temp - digit) / 10;
  }

  let left = 0;
  let right = digits.length - 1;
  while (left < right) {
    const swapTemp = digits[left];
    digits[left] = digits[right];
    digits[right] = swapTemp;
    left += 1;
    right -= 1;
  }

  let pivot = -1;
  for (let i = digits.length - 2; i >= 0; i -= 1) {
    if (digits[i] < digits[i + 1]) {
      pivot = i;
      break;
    }
  }

  if (pivot === -1) {
    return number;
  }

  let successor = -1;
  for (let i = digits.length - 1; i > pivot; i -= 1) {
    if (digits[i] > digits[pivot]) {
      successor = i;
      break;
    }
  }

  const tempDigit = digits[pivot];
  digits[pivot] = digits[successor];
  digits[successor] = tempDigit;

  left = pivot + 1;
  right = digits.length - 1;
  while (left < right) {
    const swapTemp = digits[left];
    digits[left] = digits[right];
    digits[right] = swapTemp;
    left += 1;
    right -= 1;
  }

  let result = 0;
  for (let i = 0; i < digits.length; i += 1) {
    result = result * 10 + digits[i];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
