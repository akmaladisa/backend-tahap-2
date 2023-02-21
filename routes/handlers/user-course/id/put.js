const {UserCourse} = require("../../../../models");
const {Course} = require("../../../../models");
const {User} = require("../../../../models");

module.exports = async (req, res) => {
    const {body} = req;
    const {userCourseId} = req.params;

    if( !body.users_id || !body.course_id ) {
        return res.status(400).json({
            message: "User ID and Course ID are required"
        })
    };

    const userCourse = await UserCourse.findByPk(userCourseId);

    const isUserExist = await User.findByPk(body.users_id);

    const isCourseExist = await Course.findByPk(body.course_id);

    if( !isCourseExist ) {
        return res.status(400).json({
            message: `There is no course with ID ${body.course_id}`
        })
    };

    if( !isUserExist ) {
        return res.status(400).json({
            message: `There is no user with ID ${body.users_id}`
        })
    };

    if( !userCourse ) {
        return res.status(400).json({
            message: "User Course not found"
        })
    };

    await userCourse.update(body);

    return res.json(userCourse);

}