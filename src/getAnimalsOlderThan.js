const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species.filter((e) => e.name === animal)[0].residents.every((a) => a.age > age);
}
console.log(getAnimalsOlderThan('otters', 8));

module.exports = getAnimalsOlderThan;
