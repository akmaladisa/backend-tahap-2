const express = require("express");
const verifyToken = require("../middlewares/verify-token");
const router = express.Router();
const courseHandler = require("./handlers/course");
const courseIdHandler = require("./handlers/course/id");

router.route("/")
    .get(verifyToken, courseHandler.get)
    .post(verifyToken, courseHandler.create);

router.route('/:courseId')
    .get(verifyToken, courseIdHandler.get)
    .put(verifyToken, courseIdHandler.put)
    .delete(verifyToken, courseIdHandler.delete);

module.exports = router;

