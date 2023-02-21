const { CourseCategory } = require("../../../../models");

module.exports = async (req, res) => {
    const { categoryId } = req.params;
    const { body } = req;

    if( !body.name ) {
        return res.status(400).json({
            message: "Course category name is required"
        })
    }

    const courseCategory = await CourseCategory.findByPk(categoryId);

    if( !courseCategory ) {
        return res.status(404).json({
            message: "Course category not found"
        })
    };

    await courseCategory.update(body);

    return res.json(courseCategory);

}