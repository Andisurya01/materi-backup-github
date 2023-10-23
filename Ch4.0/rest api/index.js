const express = require("express");
const { v4: uuidv4 } = require("uuid")
const { Feeds } = require("./models")

const app = express();
const PORT = 9000;

app.use(express.json())

let feeds = [{
    id: uuidv4(),
    title: "hallo andi",
    content: "hallo andi, ini content",
    category: "it"
}, {
    id: uuidv4(),
    title: "hallo andi",
    content: "hallo andi, ini content",
    category: "it"
}, {
    id: uuidv4(),
    title: "hallo andi",
    content: "hallo andi, ini content",
    category: "it"
}]


const findAndSetFeedById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const feed = await Feeds.findByPk(id);

        req.feed = feed;
        next();
    } catch (err) {
        res.status(404).json({ status: "id tidak tersedia" });

        return;
    }

};


app.get("/", (req, res) => {
    res.status(200).send("hai andi")
});

app.get("/feeds", async (req, res) => {
    const feed = await Feeds.findAll()
    console.log(feed)
    res.status(200).json(feed)
})

// GET ELEMENT BY ID

// app.get("/feeds/:id", findAndSetFeedById, (req, res) => {
//     const id = req.params.id
//     console.log(id)
//     const filter = feeds.find((i) => i.id == id)

//     res.status(200).json(filter)
// })

app.get("/feeds/:id", findAndSetFeedById, async (req, res) => {
    const id = req.params.id
    console.log(id)
    const filter = await Feeds.findByPk(id)
    console.log(filter)

    res.status(200).json(filter)
})


app.get("/feeds", (req, res) => {
    const { title } = req.query

    if (title) {
        const filterer = feeds.filter((i) => i.title === title)
        res.status(200).send(filterer)
    }
    res.status(200).send(title)
})

app.delete("/feeds/:id", async (req, res) => {
    try {
        const id = req.params.id
        await Feeds.destroy({where: {id}})
        res.json({ status: "successfull deleted" })
    } catch(err){
        res.status().json({
            message: err.message
        })
    }
    
})

app.post("/feeds", async (req, res) => {
    try {
        const body = req.body;
        const result = await Feeds.create(body)
        console.log(result)
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

app.put("/feeds/:id", (req, res) => {
    const id = req.params.id
    const currentData = feeds.find((i) => i.id == id)// jika tidak menemukan akan merturn undifine
    const { title } = req.body

    const updatedData = { ...currentData, ...{ title } }
    const index = feeds.findIndex((i) => i.id == id)// jika tidak ditemukan akan mereturn -1

    if (index == -1) {
        res.json({ status: "id tidak ditemukan oleh index" })
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