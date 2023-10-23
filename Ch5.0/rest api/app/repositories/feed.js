const { Feeds } = require('./../models')

exports.getListFeedsByCategory = (category) => {
    return Feeds.findAll({ where: { category } })
}

exports.getListFeeds = () => {
    return Feeds.findAll({
        attributes : {exclude : ["createdBy", "updatedBy", "deletedBy"]}
    })
       
}

exports.createFeed = (payload, userId) => {
    return Feeds.create({...payload, createdBy : userId});
}

exports.findByPk = (id) => {
    return Feeds.findByPk(id, {
        include: [{
            model: User,
            as: "created",
        },{
            model : User,
            as : "updated",
        },{
            model : User,
            as : "deleted",
        }],
        attributes : {exclude : ["createdBy", "updatedBy", "deletedBy"]},
    })
}

exports.update = (id, payload) => {
    return Feeds.update(payload, { where: { id }, returning: true })
}

exports.destroy = (id) => {
    return Feeds.destroy({ where: { id } })
}