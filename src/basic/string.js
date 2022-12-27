// function to extract numbers from string
const extractNumbers = (str) => {
  const pattern = /(\d+)/g;
  console.log(str.match(pattern));
  return str.match(pattern).join('');
}

module.exports = {
  extractNumbers,
}