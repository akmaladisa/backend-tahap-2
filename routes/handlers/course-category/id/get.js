const { CourseCategory } = require("../../../../models");

module.exports = async (req, res) => {
    const { categoryId } = req.params;

    const courseCategory = await CourseCategory.findByPk(categoryId);

    if( !courseCategory ) {
        return res.status(404).json({
            message: "Course category not found"
        })
    };

    return res.json(courseCategory);
}