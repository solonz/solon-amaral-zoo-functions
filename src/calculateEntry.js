const { prices } = require('../data/zoo_data');

function countEntrantsReduce(entrants) {
  const result = entrants.reduce((acc, cur) => {
    if (cur.age < 18) {
      acc.child += 1;
    }
    if (cur.age > 17 && cur.age < 50) {
      acc.adult += 1;
    }
    if (cur.age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return result;
}

function countEntrants(entrants) {
  if (!entrants || !entrants[0]) {
    return 0;
  }
  return countEntrantsReduce(entrants);
}
console.log(countEntrants({}));

function calculateEntry(entrants) {
  if (!entrants || entrants === undefined || !entrants[0]) {
    return 0;
  }
  return countEntrants(entrants).child * prices.child
    + countEntrants(entrants).adult * prices.adult
    + countEntrants(entrants).senior * prices.senior;
}
console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
