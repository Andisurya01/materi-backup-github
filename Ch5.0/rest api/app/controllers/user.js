const userServices = require('./../services/user')

exports.registerAdmin = async (req, res) => {
    try {
        const body = req.body
        const data = await userServices.create(body, true);

        res.json({
            status: "OK",
            message: "Success",
            data
        })
    } catch (err) {
        res.json({
            status: "FAIL",
            message: "",
            data: err.message
        })
    }
}

exports.register = async (req, res) => {
    try {
        const body = req.body
        const data = await userServices.create(body);

        res.json({
            status: "OK",
            message: "Success",
            data
        })
    } catch (err) {
        res.json({
            status: "FAIL",
            message: "",
            data: err.message
        })
    }
}

exports.login = async (req, res) => {
    try {
        const credentials = req.body;
        const user = await userServices.checkUser(credentials)
        res.json({
            status: "OK",
            message: "Success",
            user
        })
    } catch (err) {
        res.json({
            status: "FAIL",
            message: "",
            data: err.message
        })
    }
}