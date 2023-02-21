const { User } = require("../../../../models");
const { UserCourse } = require("../../../../models");

module.exports = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findByPk(userId);

  const courseWithSameUser = await UserCourse.findAll({
    where: {
      users_id: userId
    }
  })

  if( courseWithSameUser.length > 0 ) {
    return res.status(400).json({
      message: "User still used in user_courses table"
    })
  }

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  await user.destroy();

  return res.json({
    message: "OK",
  });
};
