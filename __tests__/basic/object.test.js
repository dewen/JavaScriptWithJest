import { person } from '../../src/basic/object';
// const person = require('../../src/basic/object');

describe('Object properties', () => {
  test('define properties', () => {
    expect(person.name).toBe('dewen');
    expect(person.id).toBe(1);

    person.id = 2;
    expect(person.id).toBe(2);

    expect(() => {
      person.name = 'john';
    }).toThrow(/Cannot assign to read only property/);

    person.age = 51;
    expect(person.age).toBe(51);

    console.log(Object.keys(person));
    expect(Object.keys(person)).toStrictEqual(['id', 'weight']);
    expect(Object.keys(person).length).toBe(2);
  });
});