const myRemove = require('./myRemove');

describe('Requisito 2 - Função MyRemove', () => {
    test('Removendo numero 3', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })
    test('Verificando se não retorna o array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toContain([1, 2, 3, 4]);
    })
    test('Verifique se o array passado não sofreu alteração', () => {
        const array = [1, 2, 3, 4];
        myRemove(array, 3)
        expect(array).toEqual([1, 2, 3, 4]);
    })
    test('Verifique se o array passado não sofreu alteração', () => {
        const array = [1, 2, 3, 4];
        expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
    })
})