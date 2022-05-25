const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...ids) => species.filter((id) => ids.includes(id.id));

console.log(getSpeciesByIds('ef3778eb-2844-4c7c-b66c-f432073e1c6b'));

module.exports = getSpeciesByIds;
