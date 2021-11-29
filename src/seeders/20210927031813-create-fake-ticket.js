"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Tickets",
      [
        {
          userId: 1,
          movieId: 1,
          createdAt: "2021-08-26 15:00:15",
          updatedAt: "2021-08-26 15:00:15",
        },
        {
          userId: 1,
          movieId: 2,
          createdAt: "2021-08-26 15:00:15",
          updatedAt: "2021-08-26 15:00:15",
        },
        {
          userId: 2,
          movieId: 2,
          createdAt: "2021-08-26 15:00:15",
          updatedAt: "2021-08-26 15:00:15",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
