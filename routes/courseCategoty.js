const express = require("express");
const verifyToken = require("../middlewares/verify-token");
const router = express.Router();
const courseCategoryHandler = require("./handlers/course-category");
const courseCategoryIdHandler = require("./handlers/course-category/id");

router.route('/')
    .get(verifyToken, courseCategoryHandler.get)
    .post(verifyToken, courseCategoryHandler.create);

router
    .route("/:categoryId")
    .get(verifyToken, courseCategoryIdHandler.get)
    .put(verifyToken, courseCategoryIdHandler.put)
    .delete(verifyToken, courseCategoryIdHandler.delete);

module.exports = router;