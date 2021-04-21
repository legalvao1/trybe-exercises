const users = {
  4 : { name: 'Mark' },
  5 : { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
  };

  return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Exercicio 2 - getUserName', () => {
  describe('when user is found', () => {
    it('Return user name', () => {
      expect.assertions(1);
      return getUserName(4).then((user) => {
        expect(user).toEqual('Mark');
      });
    });
    describe('When user is not found', () => {
      it('return an error', () => {
        expect.assertions(1);
        return getUserName(2).catch(error => 
          expect(error).toEqual({ error: 'User with 2 not found.' })
        );
      });
    })
  });
})
