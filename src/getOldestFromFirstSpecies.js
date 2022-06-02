const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function getEmployeeById(employeeId) {
  if (!employeeId) {
    return console.log('Id Inválido');
  }
  const employ = employees.find((e) => e.id === employeeId);
  return employ;
}

function getOldestFromFirstSpecies(id) {
  const result = [];
  const employee = getEmployeeById(id);
  const responsable = employee.responsibleFor[0];
  const firstEspecie = species.find((especie) => especie.id === responsable);
  const firstEspecieResidents = firstEspecie.residents;
  const sorte = firstEspecieResidents.sort((a, b) => b.age - a.age);
  result.push(sorte[0].name, sorte[0].sex, sorte[0].age);
  return result;
}

console.log(getOldestFromFirstSpecies(olaId));
module.exports = getOldestFromFirstSpecies;
