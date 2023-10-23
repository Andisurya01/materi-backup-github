const feedRepository = require('./../repositories/feed')
const ApplicationError = require('./../../config/errors/ApplicationError')

exports.listFeed = async (category) => {
    try {
        if (category) {
            const feeds = await feedRepository.getListFeedsByCategory(category);
            return feeds;
        }

        const feeds = await feedRepository.getListFeeds();
        return feeds;
    } catch (err) {
        throw new ApplicationError(`Failed to get list of feeds : ${err.message}`, 500)
    }

}
 
exports.createFeed = async (payload, userId) => {
    try {
        const feed = await feedRepository.createFeed(payload, userId)
        return feed;
    } catch (err) {
        throw new ApplicationError(`Failed to get list of feeds : ${err.message}`, 500)
    }
}

exports.getFeedById = async (id) => {
    try {
        const feed = await feedRepository.findByPk(id)
        if (!feed) {
            throw new ApplicationError("feed not found", 404)
        }
        return feed;
    } catch (err) {
        throw new ApplicationError(`Failed to get list of feeds : ${err.message}`, 500)
    }

}

exports.updateFeedById = async (id, payload) => {
    try {
        const [_, data] = await feedRepository.update(id, payload)
        return data
    } catch (err) {
        throw new ApplicationError(`Failed to get list of feeds : ${err.message}`, 500)
    }
}

exports.deleteFeedByUd = async (id) =>{
    try{
        return await feedRepository.destroy(id)
    }catch(err){
        throw new ApplicationError(`Failed to get list of feeds : ${err.message}`, 500)
    }
}