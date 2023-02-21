const {UserCourse} = require("../../../models");
const {Course} = require("../../../models");
const {User} = require("../../../models");

module.exports = async (req, res) => {
    const {body} = req;

    if( !body.users_id || !body.course_id ) {
        return res.status(400).json({
            message: "User ID and Course ID are required"
        })
    };

    const duplicateUserCourse = await UserCourse.findOne({
        where: {
            users_id: body.users_id,
            course_id: body.course_id
        }
    });

    const isUserExist = await User.findByPk(body.users_id);

    const isCourseExit = await Course.findByPk(body.course_id);

    if( duplicateUserCourse ) {
        return res.status(400).json({
            message: "User Course already exist"
        })
    };

    if( !isUserExist ) {
        return res.status(400).json({
            message: `There is no user with ID ${body.users_id}`
        })
    };

    if( !isCourseExit ) {
        return res.status(400).json({
            message: `There is no course with ID ${body.course_id}`
        })
    };

    await UserCourse.create({
        users_id: body.users_id,
        course_id: body.course_id
    });

    return res.json({
        message: "User course access has been added"
    });
}