const express = require("express");
const {v4 :uuidv4}= require("uuid")

const app = express();
const PORT = 9000;

app.use(express.json())

let feeds = [{
    id: uuidv4(),
    title: "hallo andi"
}, {
    id: uuidv4(),
    title: "hallo andi"
}, {
    id: uuidv4(),
    title: "hallo andi"
}]


const findAndSetFeedById = (req, res, next) => {
    const feed = feeds.find(req.params.id)
    if (!feed) {
        res.status(404).json({status : "id tidak tersedia"});

        return;
    }
    req.feed = feed;
    next();
};


app.get("/", (req, res) => {
    res.status(200).send("hai andi")
});

app.get("/feeds", (req, res) => {

    res.status(200).json(feeds)
})

app.get("/feeds/:id", findAndSetFeedById, (req, res) => {
    const id = req.params.id
    console.log(id)
    const filter = feeds.find((i) => i.id == id)

    res.status(200).json(filter)
})

app.get("/feeds", (req, res) => {
    const {title} = req.query

    if (title) {
        const filterer = feeds.filter((i)=> i.title === title)
        res.status(200).send(filterer)
    }
    res.status(200).send(title)
})

app.delete("/feeds/:id", (req, res) => {
    const id = req.params.id
    const list = feeds.filter((i) => i.id != id)

    feeds = list
    res.json({status : "successfull deleted"})
})

app.post("/feeds", (req, res) => {
    const {title} = req.body
    const newData = {id : uuidv4(), title}
    feeds.push(newData)
    res.status(201).json(newData)
})

app.put("/feeds/:id", (req, res)=>{
    const id = req.params.id
    const currentData = feeds.find((i) => i.id == id)// jika tidak menemukan akan merturn undifine
    const {title} = req.body

    const updatedData = {...currentData, ...{title}}
    const index = feeds.findIndex((i) => i.id == id)// jika tidak ditemukan akan mereturn -1

    if (index == -1) {
        res.json({status : "id tidak ditemukan oleh index"})
    }

    feeds[index] = updatedData

    res.status(200).json(updatedData)
})

app.get("*", (req, res) => {
    res.status(404).send("404 not found")
})

app.listen(PORT, () =>
    console.log("server telah berhasil dirun, masuk ke  http://127.0.0.1:%d", PORT)
)