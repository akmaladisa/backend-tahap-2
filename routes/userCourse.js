const express = require("express");
const verifyToken = require("../middlewares/verify-token");
const router = express.Router();
const userCourseHandler = require("./handlers/user-course");
const userCourseIdHandler = require("./handlers/user-course/id");

router.route("/")
        .get(verifyToken, userCourseHandler.get)
        .post(verifyToken, userCourseHandler.create);

router.route("/:userCourseId")
        .get(verifyToken, userCourseIdHandler.get)
        .put(verifyToken, userCourseIdHandler.put)
        .delete(verifyToken, userCourseIdHandler.delete);

module.exports = router;