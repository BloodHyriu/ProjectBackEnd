const { User } = require("../models");
const bcryptjs = require("bcryptjs");

const findAll = async (req, res) => {
  try {
    const userList = await User.findAll();
    res.status(200).send(userList);
  } catch (error) {
    res.status(500).send({
      message: "Lỗi Server",
      error,
    });
  }
};

const findDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.send(user);
  } catch (error) {
    res.status(500).send({
      message: "Lỗi Server",
      error,
    });
  }
};

const create = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;
    /* mã hóa password 
        1/ tạo ra một chuổi ngẩu nhiên ( salt )
        2/ mã hóa password + salt
    */
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      phone,
      role,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send({
      message: "Lỗi Server",
      error,
    });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await User.update(data, {
      where: {
        id,
      },
    });
    res.status(200).send("update thành công");
  } catch (error) {
    res.status(500).send({
      message: "Lỗi Server",
      error,
    });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const { detailInfo } = req;
    await User.destroy({
      where: {
        id,
      },
    });
    res.status(200).send(detailInfo);
  } catch (error) {
    res.status(500).send({
      message: "Lỗi Server",
      error,
    });
  }
};

const uploadAvatar = async (req, res) => {
  try {
    const { file, user } = req;
    const urlImage = `http://localhost:9000/${file.path}`;
    const userUploadAvatar = await User.findByPk(user.id);
    userUploadAvatar.avatar = urlImage;
    await userUploadAvatar.save();
    res.status(200).send(userUploadAvatar);
  } catch (error) {
    res.status(500).send({
      message: "Lỗi Server",
      error,
    });
  }
};

const { sequelize } = require("../models");

const getMovieByUser = async (req, res) => {
  const { id } = req.params;
  const queryString = `
    select Movies.name as movieName , Users.name as userName from Movies
    inner join Tickets
    on Movies.id = Tickets.movieId
    inner join Users
    on Users.id = Tickets.userId
    where Users.id = ${id};
  `;
  const [results] = await sequelize.query(queryString);
  res.send(results);
};

module.exports = {
  findAll,
  findDetail,
  create,
  update,
  remove,
  uploadAvatar,
  getMovieByUser,
};
