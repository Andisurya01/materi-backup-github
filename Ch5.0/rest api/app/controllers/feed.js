const { Feeds } = require("../models");
const feedServices = require('./../services/feed')

const handleGetListFeeds = async (req, res) => {
    try{
        const {category} = req.query;
        const data = await feedServices.listFeed()
        res.json({
            status : "OK",
            message : "Success",
            data 
        })
    }catch(err){
        res.status(err.statusCode).json({
            status : "FAIL",
            message : err.message,
        })
    }
}


// GET ELEMENT BY ID

// app.get("/feeds/:id", findAndSetFeedById, (req, res) => {
//     const id = req.params.id
//     console.log(id)
//     const filter = feeds.find((i) => i.id == id)

//     res.status(200).json(filter)
// })

const handleGetIdFeeds = (req, res) => {
    res.json({
        status : "OK",
        message : "Success",
        data : req.feed
    })
}

const handleDeleteFeed = async (req, res) => {
    try {
        const id = req.params.id
        await feedServices.deleteFeedByUd(id)
        res.json({
            status : "OK",
            message : "Success",
        })
    } catch (err) {
        res.status(err.statusCode).json({
            status : "FAIL",
            message : err.message,
        })
    }

}

const handleCreateFeed = async (req, res) => {
    try {
        const body = body
        const {id: userId} = req.body
        const data = await feedServices.createFeed(body, userId)
        res.json({
            status : "OK",
            message : "Success",
            data 
        })
    } catch (err) {
        res.status(err.statusCode).json({
            status : "FAIL",
            message : err.message,
        })
    }
}

const handleEditFeed = async(req, res) => {
    try{
        const {id}= req.feed;
        const body = req.body
        const {id : userId} = req.body.id
    
        const data = await feedServices.updateFeedById(id, body, userId)

        res.status(201).json(data)
    } catch (err){
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports ={
    handleGetListFeeds,
    handleGetIdFeeds,
    handleCreateFeed,
    handleDeleteFeed,
    handleEditFeed
}