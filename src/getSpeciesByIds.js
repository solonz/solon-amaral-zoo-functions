const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...ids) => species.filter((id) => ids.includes(id.id));

console.log(getSpeciesByIds('ef3778eb-2844-4c7c-b66c-f432073e1c6b', '01422318-ca2d-46b8-b66c-3e9e188244ed', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));

module.exports = getSpeciesByIds;
