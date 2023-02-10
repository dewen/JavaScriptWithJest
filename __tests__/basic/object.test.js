import {
  person,
  isOwnProp,
  cat,
  Shape,
  square,
} from '../../src/basic/object';
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

    expect(isOwnProp(person, 'weight')).toBe(true);
    expect(isOwnProp(person, 'height')).toBe(true);

    // cat
    expect(isOwnProp(cat, 'head')).toBe(false);
    expect(isOwnProp(cat, 'tail')).toBe(true);

    // function properties
    expect(Object.keys(Shape)).toStrictEqual(['hasBorder']);
    expect(Object.keys(square)).toStrictEqual(['x', 'y']);
    expect(square.hasBorder).toBe(undefined);
  });
});