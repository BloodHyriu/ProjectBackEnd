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
      "Users",
      [
        {
          id: 1,
          name: "Nguyễn Phong Hào",
          email: "hao@gmail.com",
          password: "123456",
          phone: "090909000",
          role: "ADMIN",
          avatar: "asjdhakdjas.png",
          createdAt: "2021-09-27 08:30:00",
          updatedAt: "2021-09-27 08:30:00",
        },
        {
          id: 2,
          name: "Lê Như",
          email: "nhu@gmail.com",
          password: "123456",
          phone: "090980776",
          role: "CLIENT",
          avatar: "amshdksajhdkahdjka.png",
          createdAt: "2021-09-27 08:30:00",
          updatedAt: "2021-09-27 08:30:00",
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
    await queryInterface.bulkDelete("Users", null, {});
  },
};
