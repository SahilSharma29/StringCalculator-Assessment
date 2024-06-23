import add from '../src/StringCalculator';

test('should return 0 for an empty string', () => {
  expect(add('')).toBe(0);
});

test('should return the number itself for a single number', () => {
  expect(add('1')).toBe(1);
  expect(add('5')).toBe(5);
});

test('should return the sum of two numbers', () => {
  expect(add('1,2')).toBe(3);
  expect(add('10,20')).toBe(30);
});

test('should return the sum of an unknown amount of numbers', () => {
  expect(add('1,2,3')).toBe(6);
  expect(add('1,2,3,4,5')).toBe(15);
});

test('should handle new lines between numbers', () => {
  expect(add('1\n2,3')).toBe(6);
  expect(add('1\n2\n3')).toBe(6);
});
