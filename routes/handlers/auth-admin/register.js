const bcrypt = require("bcrypt");
const { Admin } = require("../../../models");

module.exports = async (req, res) => {
    
    const { body } = req;

    // required field
    if( !body.email || !body.name || !body.password ) {
        return res.status(400).json({
            message: "Name, Email, and Password are required"
        });
    };

    // email taken?
    const isEmailUsed = await Admin.findOne({
        where: {
            email: body.email
        }
    });

    if( isEmailUsed ) {
        return res.status(400).json({
            message: "Email has been taken"
        })
    };

    const password = bcrypt.hashSync( body.password, 8 );
    
    const admin = await Admin.create({
        name: body.name,
        email: body.email,
        password: password
    });

    return res.json({
        id: admin.id,
        name: admin.name,
        email: admin.email
    });

}