const sum = require('./sum');

describe('Requisito 1 - Função Soma', () => {
    test('Soma de 2 + 3 = 5', () => {
        expect(sum(2, 3)).toEqual(5);
    })
    it('Soma de 0 + 0 = 0', () => {
        expect(sum(0, 0)).toEqual(0);
    })
    it('Se a função lanca um erro com uma string "5"', () => {
        expect(() => { 
            sum(4, '5')
        }).toThrowError(new Error('parameters must be numbers'));
    })
})