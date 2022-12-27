const { extractNumbers } = require('../../src/basic/string');

describe('Regex', () => {
  test('Extract content', () => {
    const strings = [
      {
        input: 'abc123 xyz456',
        expect: '123456',
      },
    ];

    strings.forEach((t) => {
      const result = extractNumbers(t.input);
      expect(result).toBe(t.expect);
    });
  });
});
