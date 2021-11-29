const express = require("express");
const { authRouter } = require("./auth.routers");
const { ticketRouter } = require("./ticket.routers");
const { userRouter } = require("./user.routers");
const rootRouter = express.Router();

rootRouter.use("/users", userRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/tickets", ticketRouter);
module.exports = {
  rootRouter,
};
