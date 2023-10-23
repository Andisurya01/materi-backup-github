const bcrypt = require('bcryptjs');
const SALT = 10;
const jwt = require('jsonwebtoken');
const ApplicationError = require('../../config/errors/ApplicationError');
const userRepository = require('../repositories/user');

const encryptPassword = async (password) => {
    try {
        const hash = await bcrypt.hash(password, SALT)
        return hash
    } catch (err) {
        throw new Error(err)
    }
}

const checkPassword = async (password, hash) => {
    try {
        const result = await bcrypt.compare(password, hash);
        return result
    } catch (err) {
        throw new Error(err)
    }
}

const JWT_SECRET_KEY = 'FSW1'

const createToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET_KEY)
}

const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET_KEY)
}

const authorize = async (bearerToken) => {
    try {
        if (!bearerToken) {
            throw new ApplicationError('Unauthorized', 401)
        }

        const token = bearerToken.split("Bearer ")[1];

        const decoded = verifyToken(token)

        const { id } = decoded

        const user = await userRepository.findByPk(id);

        if (!user) {
            throw new ApplicationError('Unauthorized', 401)
        }

        return user;
    } catch (err) {
        throw new ApplicationError(err.message, err.statusCode || 500)
    }
}

module.exports = {
    encryptPassword,
    checkPassword,
    createToken,
    verifyToken,
    authorize
}