module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Roles', [
        { name: 'user', createdAt: new Date(), updatedAt: new Date() },
        { name: 'admin', createdAt: new Date(), updatedAt: new Date() }
      ]);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Roles', null, {});
    }
  };