const obj1 = {
	title: 'My Title',
	description: 'My Description',
};

const obj2 = {
	description: 'My Description',
	title: 'My Title',
};

const obj3 = {
	title: 'My Different Title',
	description: 'My Description',
};

describe('Comparando se dois objetos são identicos', () => {
	it('Igualdade obj1 e obj2', () => {
			expect(obj1).toEqual(obj2);
	})
	it('Desigualdade obj1 e obj3', () => {
			expect(obj1).not.toEqual(obj3);
	})
})