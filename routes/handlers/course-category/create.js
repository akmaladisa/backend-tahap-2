const { CourseCategory } = require("../../../models");

module.exports = async (req, res) => {
    const { body } = req;

    if( !body.name ) {
        return res.status(400).json({
            message: "Course category name is required"
        })
    };

    const duplicateCategory = await CourseCategory.findOne({
        where: {
            name: body.name
        }
    });

    if( duplicateCategory ) {
        return res.status(400).json({
            message: "Category already exist"
        })
    };

    const newCategory = await CourseCategory.create({
        name: body.name
    });

    return res.json({
        message: `Course category ${newCategory.name} has been added`
    });
}