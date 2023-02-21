const {UserCourse} = require("../../../../models");

module.exports = async (req, res) => {
    const {userCourseId} = req.params;

    const userCourse = await UserCourse.findByPk(userCourseId);

    if( !userCourse ) {
        return res.status(404).json({
            message: "User Course not found"
        })
    };

    return res.json(userCourse);
}