const defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
  {
    id: 3,
    breed: "Orquidea",
    size: 99,
    needsSun: true,
    origin: "Brazil",
  },
];

let createdPlants = defaultPlants.length;

const plantWaterFrequency = (needsSun, size, origin) => {
  return needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
  : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
}

const initPlant = (id, { breed, needsSun, origin, specialCare, size }) => {
  const waterFrequency = plantWaterFrequency(needsSun, size, origin);
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

// const savePlants = () => {
//   const plants = JSON.stringify(defaultPlants);
//   localStorage.setItem("plants", plants);
// };

const getPlants = () => defaultPlants;

const getPlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id === parseInt(id));
};

const removePlantById = (id) => {
  const newPlants = defaultPlants.filter((plant) => plant.id !== parseInt(id));
  return newPlants;
};

const needsSun = (plant) => {
  return !!plant.needsSun;
};

const getPlantsThatNeedsSunWithId = (id) => {
  return defaultPlants.filter((plant) => {
    return needsSun(plant) && plant.id === parseInt(id);
  });
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id === parseInt(plantId)) {
      return newPlant;
    }
    return plant;
  });
};

const createNewPlant = (plant) => {
  createdPlants++;
  const mappedPlant = initPlant(createdPlants, { ...plant });
  defaultPlants.push(mappedPlant);
  return mappedPlant;
};

module.exports = {
  getPlants,
  getPlantById,
  removePlantById,
  editPlant,
  createNewPlant,
  getPlantsThatNeedsSunWithId,
}