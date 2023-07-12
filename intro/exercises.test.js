// exercises.test.js

const {
  addition,
  isEvenOrOdd,
  reverseString,
  countVowels,
  findMaximum,
  isPalindrome,
  factorial,
} = require("./exercises");

// Exercise 2: Addition
test("Addition adds two numbers correctly", () => {
  expect(addition(2, 3)).toBe(5);
  expect(addition(-5, 10)).toBe(5);
  expect(addition(0, 0)).toBe(0);
  expect(addition(null, null)).toBe(0);
  expect(addition(undefined, undefined)).toBe(0);
});

// Exercise 3: Even or Odd
test("Check if number is even or odd", () => {
  expect(isEvenOrOdd(4)).toBe("Even");
  expect(isEvenOrOdd(7)).toBe("Odd");
  expect(isEvenOrOdd(0)).toBe("Even");
  expect(isEvenOrOdd(null)).toBe("Even");
  expect(isEvenOrOdd(undefined)).toBe("Even");
  expect(isEvenOrOdd(NaN)).toBe("Even");
});

// Exercise 4: Reverse a String
test("Reverse a string correctly", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("javascript")).toBe("tpircsavaj");
  expect(reverseString("racecar")).toBe("racecar");
});

// Exercise 5: Count Vowels
test("Count vowels in a string", () => {
  expect(countVowels("Hello, World!")).toBe(3);
  expect(countVowels("JavaScript is awesome")).toBe(8);
  expect(countVowels("OpenAI")).toBe(3);
});

// Exercise 6: Find the Maximum
test("Find the maximum number in an array", () => {
  expect(findMaximum([1, 5, 3, 9, 2])).toBe(9);
  expect(findMaximum([-5, -2, -10, -3])).toBe(-2);
  expect(findMaximum([100, 42, 78, 91])).toBe(100);
  expect(findMaximum([100, null, 78, 91])).toBe(100);
  expect(findMaximum([100, null, undefined, 91])).toBe(100);
  expect(findMaximum([100, null, 78, NaN])).toBe(100);
});

// Exercise 7: Palindrome Checker
test("Check if a string is a palindrome", () => {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("level")).toBe(true);
});

// Exercise 9: Factorial
test("Calculate the factorial of a number", () => {
  expect(factorial(5)).toBe(120);
  expect(factorial(0)).toBe(1);
  expect(factorial(7)).toBe(5040);
  expect(factorial(-7)).toBe(-5040);
});
