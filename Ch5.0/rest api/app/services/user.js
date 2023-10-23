const ApplicationError = require("../../config/errors/ApplicationError");
const userRepository = require('./../repositories/user')
const authServices = require("./auth")


exports.create = async (payload, isAdmin) => {
    try {
        const {email, password, name, address, phoneNumber} = payload;

        if (!email || !password) {
            throw new ApplicationError(`Please input email and password`, 500)
        }

        const encryptPassword = await authServices.encryptPassword(password);
        console.log(encryptPassword);
        const user = await userRepository.create({
            email,
            encryptPassword,
            name,
            address,
            phoneNumber,
            role : isAdmin ? 'ADMIN' : 'MEMBER'
        })
        return user;
    } catch (err) {
        throw new ApplicationError(`Failed to get list of feeds : ${err.message}`, 500)
    }
}


exports.checkUser = async (credentials) =>{
    try {
        const {email, password} = credentials

        if (!email || !password) {
            throw new ApplicationError("please input email or pass", 500)
        }


        const user = await userRepository.findUserByEmail(email)
        if (!user) {
            throw new ApplicationError("email not found", 500)
        }


        const checkPassword = await authServices.checkPassword(password, user.encryptPassword)

        if (!checkPassword) {
            throw new ApplicationError("password is wrong", 500)
        }

        const token = authServices.createToken({id: user.id})

        const userWithToken = {...user.dataValues, token}

        return userWithToken;
    } catch (err) {
        throw new ApplicationError(err.message, 500)
    }
}