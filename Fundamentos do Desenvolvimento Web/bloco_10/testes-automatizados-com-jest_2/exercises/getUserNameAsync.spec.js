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

test('Requisito 3 - return username when it is found', async () => {
  const username = await getUserName(4);
  expect(username).toEqual('Mark');
});

test('return error, when username not found', async () => {
  try{
    await getUserName(4);
  }catch (error) {
    expect(error).toEqual({ error: 'User with 2 not found.'})
  }
})