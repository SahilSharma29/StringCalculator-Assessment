import add from '../src/StringCalculator';

// Test for the simplest case: an empty string
test('should return 0 for an empty string', () => {
  expect(add('')).toBe(0);
});

// Test for a single number
test('should return the number itself for a single number', () => {
  expect(add('1')).toBe(1);
  expect(add('5')).toBe(5);
});

// Test for two numbers separated by a comma
test('should return the sum of two numbers', () => {
  expect(add('1,2')).toBe(3);
  expect(add('10,20')).toBe(30);
});

// Test for an unknown amount of numbers separated by commas
test('should return the sum of an unknown amount of numbers', () => {
  expect(add('1,2,3')).toBe(6);
  expect(add('1,2,3,4,5')).toBe(15);
});

// Test for numbers separated by new lines
test('should handle new lines between numbers', () => {
  expect(add('1\n2,3')).toBe(6);
  expect(add('1\n2\n3')).toBe(6);
});

// Test for different delimiters specified at the start of the string
test('should support different delimiters', () => {
  expect(add('//;\n1;2')).toBe(3);
  expect(add('//|\n1|2|3')).toBe(6);
});

// Test for negative numbers, should throw an exception
test('should throw an exception for negative numbers', () => {
  expect(() => add('1,-2,3')).toThrow('negative numbers not allowed: -2');
  expect(() => add('-1,-2,-3')).toThrow(
    'negative numbers not allowed: -1,-2,-3',
  );
});
