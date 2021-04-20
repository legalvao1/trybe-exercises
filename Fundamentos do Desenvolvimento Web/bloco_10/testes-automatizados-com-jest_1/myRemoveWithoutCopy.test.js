const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('Requisito 3 - Função myRemoveWithotCopy', () => {
    test('Verifique se a chamada da função retorna o array esperado', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    });
    test('Verifique se a chamada da função não retorna o array esperado', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    });
    test('Verifique se o array passado por parâmetro sofreu alterações', () => {
        const array = [1, 2, 3, 4];
        myRemoveWithoutCopy(array, 3);
        expect(array).not.toEqual([1, 2, 3, 4])
    })
    test('Verifique se retorna o array esperado', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})