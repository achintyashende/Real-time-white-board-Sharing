const express = require("express");
const app = express()

const server = require("http").createServer(app);
const io = require("socket.io")(server);

//routes
app.get("/", (req, res) => {
    res.send(
        "This MERN Real time whiteboard sharing app official server."
    );
});

let roomIdGlobal, imgURLGlobal;

io.on("connection", (socket) => {
    // console.log("user connected ");
    socket.on("userJoined", (data) => {
        const {name, userId, roomId, host, presenter} = data;
        roomIdGlobal = roomId
        socket.join(roomId);
        socket.emit("userIsJoined", { success: true })
        socket.broadcast.to(roomId).emit("whiteboardDataResponse",{
            imgURL : imgURLGlobal,
        })
    });
    socket.on("whiteboardData", (data)=>{
        imgURLGlobal = data;
        socket.broadcast.to(roomId).emit("whiteboardDataResponse", {
            imgURL: data,
        })
    });
});

const port = process.env.PORT || 5000;

server.listen(port, () => 
    console.log("Server is running 🤖 on http://localhost:5000 ")
);
