const jwt = require("jsonwebtoken");
const { Admin } = require("../models");

module.exports = async (req, res, next) => {
  // Get auth token
  const token = req.headers.authorization;

  if (!token)
    return res.status(403).json({
      message: "Incorrect credentialxx",
    });

  const JWTToken = token.split(" ").pop();

  try {
    // Verify token
    const data = jwt.verify(JWTToken, "dahsdhalsdh");

    const admin = await Admin.findByPk(data.adminCredential.id);

    if (!admin)
      return res.status(404).json({
        message: "Admin not found",
      });

    req.user = admin;
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      error
    });
  }
};
