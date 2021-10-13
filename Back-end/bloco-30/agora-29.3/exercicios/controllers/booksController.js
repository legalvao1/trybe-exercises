const { Booki } = require('../models');

const getAll = async (req, res) => {
  try {
    const books = await Booki.findAll({
      order: [
        ['title', 'ASC'],
        ['createdAt', 'ASC']
      ]
    });
    res.status(200).json(books);

  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: "Deu ruim"});
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Booki.findByPk(id);
    res.status(200).json(books);

  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: "Deu ruim"});
  }
}

const getByAuthor = async (req, res) => {
  try {
    const { author } = req.params;
    const books = await Booki.findOne({ where: { author } });
    res.status(200).json(books);

  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: "Deu ruim"});
  }
}

const createNew = async (req, res) => {
  try {
    const { title, author, pageQuantity }= req.body;
    const createBook = await Booki.create({ title, author, pageQuantity });
    console.log(createBook);

    res.status(201).json(createBook);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: "Deu ruim"});
  }
}

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const updateBook = await Booki.update(
      { title, author, pageQuantity, updatedAt: Date.now()}, { where: { id } });

    res.status(200).json(updateBook);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: "Deu ruim"});
  }
}

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Booki.destroy({ where: { id }});

    res.status(200).json(book);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: "Deu ruim"});
  }
}

module.exports = {
  getAll,
  getById,
  getByAuthor,
  createNew,
  updateById,
  deleteById
}