const arr1 = [
  1,
  2,
  3,
];


const a = 4;
const b = 5;

const obj1 = {
  ...arr1,
  a,
  b,
};

console.log(obj1);

const SpreadArray = () => {

};

const SpreadObject = ({data, ...rest}) => {
  console.log(data, 'DATA');
  console.log(rest, 'REST');
}

module.exports = {
  SpreadArray,
  SpreadObject,
};
