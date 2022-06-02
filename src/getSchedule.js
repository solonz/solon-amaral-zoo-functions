const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const diasDaSemana = {
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: species.filter((a) => a.availability.includes('Sunday')).map((b) => b.name),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: species.filter((a) => a.availability.includes('Tuesday')).map((b) => b.name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: species.filter((a) => a.availability.includes('Wednesday')).map((b) => b.name),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: species.filter((a) => a.availability.includes('Thursday')).map((b) => b.name),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: species.filter((a) => a.availability.includes('Friday')).map((b) => b.name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species.filter((a) => a.availability.includes('Saturday')).map((b) => b.name),
  },

};

// console.log(diasDaSemana);
let days = Object.keys(hours);
const animalsNames = species.map(({ name }) => name);

function getAnimalSchedule(scheduleTarget) {
  if (days.includes(scheduleTarget)) {
    days = [scheduleTarget];
    return days.reduce((acc, cur) => {
      if (!acc[cur]) {
        acc[cur] = {
          officeHour: `Open from ${hours[cur].open}am until ${hours[cur].close}pm`,
          exhibition: species.filter((a) => a.availability.includes([cur])).map((b) => b.name),
        };
        return acc;
      }
    }, {});
  }
}
// const result = species.find((c) => c.name === scheduleTarget);
//   return result.availability;

// .map((d) => d.availability)
function getSchedule(scheduleTarget) {
  if (!scheduleTarget.includes(days) && !scheduleTarget.includes(animalsNames)) {
    return diasDaSemana;
  }
  return getAnimalSchedule(scheduleTarget);
}
console.log(getSchedule('Tuesday'));
module.exports = getSchedule;
