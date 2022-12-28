// Object defineProperty
const person = {
  id: 1,
};

Object.defineProperty(person, 'name', {
  value: 'dewen',
  writable: false,
});

Object.defineProperty(person, 'age', {
  value: 50,
  writable: true,
});

Object.defineProperty(person, 'weight', {
  value: 150,
  writable: true,
  enumerable: true,
});

export { person };
