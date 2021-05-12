const app = require("express")();
const cors = require("cors");
const httpServer = require("http").createServer(app);
const options = {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
};
const io = require("socket.io")(httpServer, options);

app.use(cors());

app.get("/api", (req, res) => {
  res.send({ message: "you've reached api root!" });
});

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("chat", (arg) => {
    console.log(arg);
    socket.emit("chat", "I see you have connected");
  });
});

httpServer.listen(8000, () => console.log(`server is running on port 8000`));
// WARNING !!! app.listen(3000); will not work here, as it creates a new HTTP server
