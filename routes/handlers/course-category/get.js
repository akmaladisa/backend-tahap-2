const { CourseCategory } = require("../../../models");

module.exports = async (req, res) => {
    const courseCategories = await CourseCategory.findAll();

    return res.json( courseCategories );
}