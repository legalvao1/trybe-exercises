const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalByAge = Animals.find((animal) => animal.age === age);
      if(animalByAge !== undefined && animalByAge.length !== 0) {
        return resolve(animalByAge);
      }
      return reject('Nenhum animal com essa idade');
    },100)
  })
);

const getAnimal = (age) => {
  return findAnimalByAge(age).then(animal => animal)
}

describe('Testando Promise findAnimalByAge', () => {
  describe('When age exists', () => {
    it('returns the object', () => {
      expect.assertions(1);
      return getAnimal(2).then((animal) => {
        expect(animal).toEqual({ name: 'Soneca', age: 2, type: 'Dog' });
      });
    });
  });
  describe('When age does not exists', () => {
    it('returns an error', () => {
      expect.assertions(1);
      return getAnimal(6).catch((error) => {
        expect(error).toEqual('Nenhum animal com essa idade');
      });
    });
  });
});