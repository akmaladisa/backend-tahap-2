const jwt = require("jsonwebtoken");
const { compareSync } = require("bcrypt");
const { Admin } = require("../../../models");

module.exports = async (req, res) => {
    const { body } = req;

    if( !body.email || !body.password ) {
        return res.status(400).json({
            message: "Email and Password are required"
        });
    };

    // email check
    const admin = await Admin.findOne({
        where: {
            email: body.email
        }
    });

    if( !admin ) {
        return res.status(400).json({
            message: "Email not found"
        })
    };

    const comparePassword = compareSync(body.password, admin.password);

    if( !comparePassword ) {
        return res.status(400).json({
            message: "Password wrong"
        })
    };

    const adminCredential = {
        id: admin.id,
        email: admin.email,
        password: admin.password
    };

    const token = jwt.sign( { adminCredential }, "dahsdhalsdh", {
        expiresIn: "2h"
    } );

    return res.json( { token } );

}