const { User } = require("../../../../models");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  const { userId } = req.params;
  const { body } = req;

  if( !body.email || !body.name || !body.password ) {
    return res.status(400).json({
        message: "Name, Email, and Password are required"
    });
  };

  const user = await User.findByPk(userId, {
    attributes: { exclude: ["password"] },
  });

  if (!user)
    return res.status(404).json({
      message: "User not found",
    });

  body.password = bcrypt.hashSync(body.password, 8)

  await user.update(body);

  return res.json(user);
};
