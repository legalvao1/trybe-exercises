module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Booki', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  }, {
    // updatedAt: false,
  });

  return Book;
};