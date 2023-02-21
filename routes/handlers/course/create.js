const {Course} = require("../../../models");
const {CourseCategory} = require("../../../models");

module.exports = async (req, res) => {
    const {body} = req;

    if( !body.title || !body.course_category_id ) {
        return res.status(400).json({
            message: "Course title and category ID are required"
        })
    };

    const duplicateCourse = await Course.findOne({
        where: {
            title: body.title,
            course_category_id: body.course_category_id
        }
    });

    const courseCategory = await CourseCategory.findOne({
        where: {
            id: body.course_category_id 
        }
    });

    if( !courseCategory ) {
        return res.status(400).json({
            message: `There is no course category with ID ${body.course_category_id }`
        })
    };

    if( duplicateCourse ) {
        return res.status(400).json({
            message: "Course already exist"
        })
    };

    const newCourse = await Course.create({
        title: body.title,
        course_category_id: body.course_category_id
    });

    return res.json({
        message: `Course ${newCourse.title} has been added`
    });
}