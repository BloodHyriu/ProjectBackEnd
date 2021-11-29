const { User } = require("../models");
const graphqlResolvers = {
  async user({ id }) {
    try {
      const userDetail = await User.findByPk(id);
      return userDetail;
    } catch (error) {
      throw new Error(error);
    }
  },
  async users() {
    try {
      const userList = await User.findAll();
      return userList;
    } catch (error) {
      throw new Error(error);
    }
  },
  async createUser({ inputUser }) {
    try {
      const user = await User.create(inputUser);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = {
  graphqlResolvers,
};
