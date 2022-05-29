const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const object = {};
    species.forEach((specie) => {
      object[specie.name] = specie.residents.length;
    });
    return object;
  }
  if (typeof animal === 'object' && animal.sex === undefined) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }
  return species.find((specie) => specie.name === animal.specie)
    .residents.filter((resident) => resident.sex === animal.sex).length;
}

console.log(countAnimals({ specie: 'giraffes' }));
module.exports = countAnimals;
