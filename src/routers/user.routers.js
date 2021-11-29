const express = require("express");
const {
  findAll,
  findDetail,
  create,
  update,
  remove,
  uploadAvatar,
  getMovieByUser,
} = require("../controllers/user.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/verify-token.middlewares");
const { logsUser } = require("../middlewares/logs/logs-user.middlewares");
const {
  uploadImageSingle,
} = require("../middlewares/upload/upload-image.middlewares");
const {
  checkExist,
} = require("../middlewares/validations/check-exist.middlewares");
const { User } = require("../models");

/**
 * tạo api quản lý người dùng ( REST APIS )
 *      1/ lấy danh sách người dùng ( get - http://localhost:9000/users )
 *      2/ lấy chi tiết người dùng ( get - http://localhost:9000/users/12 )
 *      3/ tạo người dùng ( post - http://localhost:9000/users )
 *      4/ cập nhật người dùng ( put - http://localhost:9000/users/12 )
 *      5/ xóa người dùng ( delete - http://localhost:9000/users/12 )
 */

const userRouter = express.Router();

userRouter.get("/movie-by-user/:id", getMovieByUser);

userRouter.post(
  "/upload-avatar",
  authenticate,
  uploadImageSingle("avatar"),
  uploadAvatar
);

userRouter.get(
  "/",
  logsUser,
  (req, res, next) => {
    console.log("middleware thứ 2");
    // res.send("dừng tại middleware thứ 2");
    next();
  },
  findAll
);

userRouter.get("/:id", checkExist(User), findDetail);

userRouter.post("/", create);

userRouter.put("/:id", checkExist(User), update);

userRouter.delete(
  "/:id",
  authenticate,
  authorize(["ADMIN", "SUPER_ADMIN"]),
  checkExist(User),
  remove
);

module.exports = {
  userRouter,
};
