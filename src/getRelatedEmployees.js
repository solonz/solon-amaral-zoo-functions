const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((a) => a.managers.includes(id));
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return employees.filter((b) => b.managers.includes(managerId))
      .map((c) => `${c.firstName} ${c.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
