const { Feeds, User } = require('./../models')

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

exports.update = (id, payload, userId) => {
    return Feeds.update({...payload, updatedBy : userId}, { where: { id }, returning: true, paranoid: false })
}

exports.destroyTemporary = (id, payload, userId) => {
    return Feeds.update({...payload, deletedBy : userId}, { where: { id }, returning: true, paranoid: false })
}

exports.destroy = (id) => {
    return Feeds.destroy({ where: { id } })
}