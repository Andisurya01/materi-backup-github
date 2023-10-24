const express = require("express");
const { handleDeleteFeed, handleGetListFeeds, handleCreateFeed, handleEditFeed, handleGetIdFeeds } = require("./app/controllers/feed");
const { findAndSetFeedById } = require("./middleware");
const userController = require('./app/controllers/user')
const middleware = require('./app/middleware/auth')

const app = express();
const PORT = 9000;

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("hai andi")
});

app.get("/feeds/:id",middleware.authorize,findAndSetFeedById, handleGetIdFeeds)

app.get("/feeds", middleware.authorize, handleGetListFeeds)

app.delete("/feeds/:id",middleware.authorize,middleware.isSuperOrAdmin,findAndSetFeedById, handleDeleteFeed)

app.post("/feeds",middleware.authorize,  handleCreateFeed)

app.put("/feeds/:id", middleware.authorize, middleware.isSuperOrAdmin,findAndSetFeedById, handleEditFeed)

app.post("/register", userController.register)

app.post("/login", userController.login)

app.post("/admin/register", middleware.authorize ,middleware.isSuperAdmin, userController.register)

app.get("*", (req, res) => {
    res.status(404).send("404 not found")
})

app.listen(PORT, () =>
    console.log("server telah berhasil dirun, masuk ke  http://127.0.0.1:%d", PORT)
)