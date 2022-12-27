const spread = require('../../src/es6/spread');

describe('Spread array variables', () => {
  const data = 123;
  const func1 = function(){ console.log('function 1') }

  it('spreads array', () => {
    spread.SpreadArray();
  });

  it('spreads object', () => {
    const obj2 = {
      data,
      func1,
      error: null,
    };

    spread.SpreadObject(obj2);

    // nested destructure
    const parent = {
      child1: 'c1',
      child2: {
        grandChild1: 'gc1',
        grandChild2: 'gc2',
      },
    };

    const { child2: { grandChild2 }, child1 } = parent;
    expect(grandChild2).toBe('gc2');
    expect(child1).toBe('c1');

  });

});
