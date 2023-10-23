const {Feeds} = require("./app/models")
const feedServices = require('./app/services/feed')

const findAndSetFeedById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const feed = await feedServices.getFeedById(id);
        console.log(feed);
        req.feed = feed;
        next();

    } catch (err) {
        res.status(err.statusCode).json({
            status : "FAIL",
            message : err.message,
        })
    }

}

module.exports = {
    findAndSetFeedById
}