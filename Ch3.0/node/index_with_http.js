// const fs = require("fs");

// const isi = fs.readFileSync("node.txt", "utf-8");

// console.log(isi);


// MEMBUAT HTTP SERVER
const http = require("http");

const PORT = 8000;

// untuk membuat server harus ada http.createserver
const onRequest = (req, res) => {
    const url = req.url;
    switch (url) {
        case '/about':
            res.end("This is page about")
            return;
        case '/profile':
            res.setHeader("Conten-Type","application/json")
            res.writeHead(200);
            res.end(JSON.stringify({"nama" : "Andi"}))
            return;
        default:
            res.end("ok")
            return;
    }
}

const server = http.createServer(onRequest)

server.listen(PORT, '127.0.0.1', () => {
    console.log("server sudah berjalan, silahkan buka ganti http://127.0.0.1:%d", PORT);
})