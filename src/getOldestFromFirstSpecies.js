const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  if (!id) {
    return console.log('Id Inválido');
  }
  const responsableFirst = employees.find((e) => e.id === id).responsibleFor[0];
  const residentes = species.find((especie) => especie.id === responsableFirst).residents
    .sort((a, b) => b.age - a.age);
  return Object.values(residentes[0]);
}
console.log(getOldestFromFirstSpecies());
module.exports = getOldestFromFirstSpecies;
