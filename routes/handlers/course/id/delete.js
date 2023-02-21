const {Course} = require("../../../../models");
const {UserCourse} = require("../../../../models");

module.exports = async (req, res) => {
    const {courseId} = req.params;

    const course = await Course.findByPk(courseId);

    const userCourse = await UserCourse.findAll({
        where: {
            course_id: courseId
        }
    });

    if(userCourse.length > 0) {
        return res.status(400).json({
            message: `Course is still used in user_courses table`
        })
    }

    if(!course) {
        return res.status(404).json({
            message: "Course not found"
        })
    };

    await course.destroy();

    return res.json({
        message: "Course has been deleted"
    });
}
