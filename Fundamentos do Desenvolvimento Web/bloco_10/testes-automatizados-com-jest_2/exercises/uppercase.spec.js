const uppercase = require('./uppercase');

describe('uppercase function', () => {
	it('Set de string to uppercase', done => {
		uppercase('sunset' ,(result) => {
			expect(result).toBe('SUNSET');
			done();
		})
	})
})