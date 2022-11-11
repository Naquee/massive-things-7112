const { UserModel } = require("../Models/User.models");

const authorization = (permittedRole) => {
    return async (req, res, next) => {
        const { email } = req.body;
        const user = await UserModel.findOne({ email: email })
        const role = user.role
        if(permittedRole === role){
            next();
        }else{
            res.send({msg: "You Are Not Authorized", status:false});
        }
    }
}

module.exports={
    authorization
}
