/**
 * 1. Object defineProperty
 */

const person = {
  id: 1,
};

// inheritance parent
const mammals = {
  head: 1,
};

const cat = {
  tail: 1,
};

// setPrototypeOf is a slow operation in every browser and JavaScript engine.
// should AVOID
Object.setPrototypeOf(cat, mammals);

Object.defineProperty(person, 'name', {
  value: 'dewen',
  writable: false,
});

// writeable property
Object.defineProperty(person, 'age', {
  value: 50,
  writable: true,
});

// enumerable property
Object.defineProperty(person, 'weight', {
  value: 150,
  writable: true,
  enumerable: true,
});

// Non-enumerable property
Object.defineProperty(person, 'height', {
  value: 5.11,
  enumerable: false,
});

const isOwnProp = (obj, prop) => {
  return obj.hasOwnProperty(prop)
}

/**
 * 2. Object create and prototype
 *    see 
 *        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 */

// Shape - superclass
function Shape() {
  const weight = 10;
  this.x = 0;
  this.y = 0;

  return true;
}
Shape.hasBorder = () => {
  return true;
}

// Rectangle - subclass
function Rectangle() {
  // Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype, {
  // If you don't set Rectangle.prototype.constructor to Rectangle,
  // it will take the prototype.constructor of Shape (parent).
  // To avoid that, we set the prototype.constructor to Rectangle (child).
  constructor: {
    value: Rectangle,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

console.log(Shape.prototype, '>>>>>');
console.log(Rectangle.prototype, '>>>>>');

const square = new Shape;

// Export objects
export {
  person,
  isOwnProp,
  cat,
  Shape,
  square,
};
