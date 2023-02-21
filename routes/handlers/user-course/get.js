const { UserCourse } = require("../../../models");

module.exports = async (req, res) => {
    const userCourses = await UserCourse.findAll();

    return res.json(userCourses);
}