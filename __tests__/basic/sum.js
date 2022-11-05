const sum = require('../../src/basic/sum')

test('Integer sum - add 1 + 2 equals 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('Truthiness', () => {
  let v1 = null
  let v2 = 1

  expect(v1).toBeNull()
  expect(v2).not.toBeNull()
  expect(v1).not.toBeUndefined()
  expect(v2).toBeTruthy()
})