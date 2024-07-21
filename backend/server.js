const express = require("express");
const app = express()

const server = require("http").createServer(app);
const io = require("socket.io")(server);

//routes
app.get("/",(req, res)=>{
    res.send("This MERN Real time whiteboard sharing app official server.")
});

const port = process.env.PORT || 5000;
server.listen(port,()=>console.log("Server is running on http://localhost:5000 "))