const { CourseCategory } = require("../../../../models");
const { Course } = require("../../../../models");

module.exports = async (req, res) => {
    const { categoryId } = req.params;

    const courseCategory = await CourseCategory.findByPk(categoryId);

    if( !courseCategory ) {
        return res.status(404).json({
            message: "Course category not found"
        })
    };

    const courseWithSameCategoryId = Course.findOne({
        where: {
            course_category_id: categoryId
        }
    });

    if( courseWithSameCategoryId ) {
        return res.status(400).json({
            message: `course category ID ${categoryId} is still used in courses table`
        })
    }

    await courseCategory.destroy();

    return res.json({
        message: "Course category has been deleted"
    });
}