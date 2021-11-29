const checkExist = (Model) => async (req, res, next) => {
  try {
    const { id } = req.params;
    const detail = await Model.findByPk(id);
    if (detail) {
      req.detailInfo = detail;
      next();
    } else {
      res.status(404).send({
        message: "User không tồn tại",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  checkExist,
};
