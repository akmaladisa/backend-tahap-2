const {Course} = require("../../../../models");
const {CourseCategory} = require("../../../../models");

module.exports = async (req, res) => {
    const {courseId} = req.params;
    const {body} = req;

    if( !body.title || !body.course_category_id  ) {
        return res.status(400).json({
            message: "Course title & category ID are required"
        })
    }

    const courseCategory = await CourseCategory.findByPk(body.course_category_id);

    if( !courseCategory ) {
        return res.status(400).json({
            message: `There is no course category with ID ${body.course_category_id }`
        })
    };

    const course = await Course.findByPk(courseId);

    if(!course) {
        return res.status(404).json({
            message: "Course not found"
        })
    };

    await course.update(body);

    return res.json(course);
}