const express = require("express");
const router = express.Router();
const authAdmin = require("./handlers/auth-admin")

router.post("/login", authAdmin.login);
router.post("/register", authAdmin.register);

module.exports = router;
