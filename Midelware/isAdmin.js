const isAdmin = async (req, res, next) => {
    console.log(req.user)
    if (req.user.role !== 1) {
     return  res
      .status(400)
      .json({
        msg: "you are not allowed to this service,only admin have the right",
      });
    }
  next()
  };
  module.exports = isAdmin;