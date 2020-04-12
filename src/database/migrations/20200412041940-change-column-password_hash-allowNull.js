module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'password_hash', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: (queryInterface) => {
    return queryInterface.changeColumn('users', 'password_hash', {
      allowNull: true,
    });
  },
};
