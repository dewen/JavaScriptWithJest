const {
  sum
 } = require('../../src/basic/datatypes');

test('Truthiness', () => {
  let v1 = null;
  let v2 = 1;

  expect(v1).toBeNull();
  expect(v2).not.toBeNull();
  expect(v1).not.toBeUndefined();
  expect(v2).toBeTruthy();
});

describe('Sum numbers', () => {
  test('Integer sum - add 1 + 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('Floating point arithmetic is not always 100% accurate.', () => {
    const result = sum(0.1, 0.2) === 0.3;
    console.log(result);
    expect(result).toBeFalsy();
  });
});
