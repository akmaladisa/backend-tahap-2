const { Course} = require("../../../../models");

module.exports = async (req, res) => {
    const {courseId} = req.params;

    const course = await Course.findByPk(courseId);

    if(!course) {
        return res.status(404).json({
            message: "Course not found"
        })
    };

    return res.json(course);
}