const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const objetoResultado = employees.map((objEmployee) => (
  {
    id: objEmployee.id,
    fullName: `${objEmployee.firstName} ${objEmployee.lastName}`,
    species: objEmployee.responsibleFor.map((a) => (
      species.find((b) => (b.id === a)).name
    )),
    locations: objEmployee.responsibleFor.map((a) => (
      species.find((b) => (b.id === a)).location
    )),
  }
));

function checkPessoa(objPessoa) {
  if (objetoResultado.find((a) => a.fullName.includes(Object.values(objPessoa)))) {
    return true;
  }
  if (objetoResultado.find((b) => b.id.includes(Object.values(objPessoa)))) {
    return true;
  }
  return false;
}

// console.log(objetoResultado);

function getEmployeesCoverage(objPessoa) {
  if (!objPessoa) return objetoResultado;
  if (checkPessoa(objPessoa) === false) {
    throw new Error('Informações inválidas');
  }
  return objetoResultado.find((elemento) =>
    elemento.fullName.includes((Object.values(objPessoa)))
    || elemento.id.includes((Object.values(objPessoa))));
}
console.log(getEmployeesCoverage({ id: 'Sharonda' }));

// const result1 = objetoResultado.find((pessoa) => (
//   if (pessoa.id === objPessoa.id)
//   ));
// }
// const result2 = objetoResultado.find((a) => a.fullName.includes(objPessoa.name));
// if (objPessoa.id && result1) {
//   return result1;
// }
// if (objPessoa.name && result2) {
//   return result2;
// }
// if (objPessoa) {
//   return objetoResultado;
//   }
//   throw new Error('Informações inválidas');
// }

//     const objEmploy = objetoResultado.find((pessoa) => (
//     pessoa.id ? pessoa.id === objPessoa.id : pessoa.fullName.includes(objPessoa.name)
//   ));
//   if (objEmploy) {
//     return objEmploy;
//   }
//   if (objPessoa) {
//     throw new Error('Informações inválidas');
//   }
//   return objetoResultado;
// }
module.exports = getEmployeesCoverage;
