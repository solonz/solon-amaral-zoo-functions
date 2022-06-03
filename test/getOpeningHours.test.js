const getOpeningHours = require('../src/getOpeningHours');

const aberto = 'The zoo is open';
const fechado = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('retorna que o zoo está aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual(aberto);
    expect(getOpeningHours('Wednesday', '10:00-AM')).toEqual(aberto);
    expect(getOpeningHours('Friday', '01:00-PM')).toEqual(aberto);
  });
  it('retorna que o zoo está fechado', () => {
    expect(getOpeningHours('Tuesday', '12:00-PM')).toEqual(fechado);
    expect(getOpeningHours('Wednesday', '10:00-PM')).toEqual(fechado);
    expect(getOpeningHours('Friday', '01:00-AM')).toEqual(fechado);
    expect(getOpeningHours('Monday', '01:00-PM')).toEqual(fechado);
  });
  it('retorna erros na função', () => {
    expect(() => getOpeningHours('Tuesday', '19:00-PM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Wednesday', '10:67-PM')).toThrow('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Friday', '01:00-rM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Sunday', '0S:00-PM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Sunday', '03:O0-PM')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Terça', '03:O0-PM')).toThrow('The day must be valid. Example: Monday');
  });
  it('retorna a agenda do zoo se nada for passado', () => {
    const actual = getOpeningHours();

    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(actual).toEqual(expected);
  });
});
