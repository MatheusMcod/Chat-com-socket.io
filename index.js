let express = require("express");
const { Socket } = require("socket.io");
let app = express();
let http = require("http").createServer(app);
let io = require("socket.io")(http);

io.on("connection", (socket) => {
    socket.on("msg", (data) => {
        io.emit("showmsg", data);
    });
});

app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("index");
});

http.listen(4444, () => {
    console.log("APP RODANDO!");
});