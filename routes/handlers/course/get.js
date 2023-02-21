const { Course } = require("../../../models");

module.exports = async ( req, res ) => {
    const courses = await Course.findAll();

    return res.json(courses);
}