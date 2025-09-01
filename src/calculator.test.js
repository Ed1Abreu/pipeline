const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator Tests', () => {
  describe('add function', () => {
    test('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 5)).toBe(15);
    });

    test('should handle negative numbers', () => {
      expect(add(-2, 3)).toBe(1);
      expect(add(2, -3)).toBe(-1);
    });

    test('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract function', () => {
    test('should subtract two numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(10, 5)).toBe(5);
    });

    test('should handle negative results', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply function', () => {
    test('should multiply two numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(4, 5)).toBe(20);
    });

    test('should handle zero', () => {
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide function', () => {
    test('should divide two numbers correctly', () => {
      expect(divide(6, 2)).toBe(3);
      expect(divide(10, 5)).toBe(2);
    });

    test('should throw error for division by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });
});
