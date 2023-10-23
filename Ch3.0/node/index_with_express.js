// MEMBUAT SERVER MENGGUNAKAN LIBRARY EXPRESS JS
const EXPRESS = require("express");
const app = EXPRESS();
const PORT = 8000;
const ejs =require("ejs")
const {handleListBooks, handleCreateBook, handleUpdateBook, handleGetBook, handleDeleteBook} = require("./handler")

// express json dibutuhkan ketikan kita membutuhkan dalam bentuk json
app.use(EXPRESS.json())

function setBook(req, res, next) {
    const book = Book.find(req.params.id);
    if (!book) {
      res.status(404).json({
        error: "Book not found!",
      });
  
      return;
    }
  
    req.book = book;
    next();
  }

// GET /books get list books
app.get("/books", handleListBooks);
// POST /books create a new books
app.post("/books", handleCreateBook);
// PUT /books/:id update book
app.put("/books/:id", setBook, handleUpdateBook);
// GET /books/:id get detail book
app.get("/books/:id", setBook, handleGetBook);
// DELETE /books/:id delete book
app.delete("/books/:id", handleDeleteBook);





// app.set("view engine", "ejs")

// // handler function
// const handleHomeRequest = (req, res) => {
//     res.status(200).send("HELLO ANDI")
// }
// app.get("/home", (handleHomeRequest));

// const handleCreateCars = (req, res) => {
//     res.status(200).send("HELLO ANDI")
// }

// const isAdmin = (req, res, next) => {
//     const {role = ""} = req.body;
    
//     if(role !== "admin"){
//         res.status(403).send("kamu bukan admin")
//         return
//     }
//     next()
// }

// app.post("/cars", isAdmin, handleCreateCars);

// // querry params
// app.get("/about2", (req, res) => {
//     const params = req.query;
//     console.log("params", params)
//     res.status(200).send("Hallo andi, ini page about 2")
// });

// // path parameter
// app.get("/profile/:id/:status", (req, res) => {
//     const params = req.params;
//     console.log("params", params)
//     res.status(200).send("Hallo andi, ini page about 2")
// });

// // http post
// app.post('/profile', (req, res) =>{
//     const params = req.body;
//     console.log("params", params)
//     res.status(200).send("Hallo andi, ini page about 2")
// })

// // //
// app.get("/", (req, res) => {
//     res.status(200).send("HELLO ANDI")
// });

// app.get("/about", (req, res) => {
//     res.status(200).send("HELLO ANDI, ini about")
// });

// app.get("/coba",(req, res) =>{
//     res.render("index", { name : "Andi"})
// })


app.listen(PORT, ()=>{
    console.log("udah dirun nih, silahkan buka http://localhost:%d", PORT)
})