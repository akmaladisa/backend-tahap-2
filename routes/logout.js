var express = require('express');
var router = express.Router();
const verifyToken = require("../middlewares/verify-token");

router.post("/", verifyToken, (req, res) => {
    delete req.headers.authorization;

    res.status(200).json({
        message: "Token Deleted"
    })
})

module.exports = router;