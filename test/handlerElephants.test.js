const handlerElephants = require('../src/handlerElephants');

describe('6 - crie uma função que retorna dados sobre os elefantes do zoo', () => {
  it('Retorna quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Retorna nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Retorna o número referente a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('caso não seja fornecido um parametro, retorne undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Retorne null caso o parâmetro fornecido for inválido', () => {
    expect(handlerElephants('')).toBeNull();
  });

  it('Retorna um erro caso o parâmetro não seja uma string', () => {
    expect(handlerElephants(42)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
