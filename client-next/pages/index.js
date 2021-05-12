import React from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000/");

socket.on("chat", (arg) => {
  console.log(arg); // world
});

socket.on("connect", () => {
  // console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  console.log("connected");
});

function Home() {
  const sendSomething = () => {
    socket.emit("chat", "Hi how are you");
  };

  return (
    <>
      Hey<button onClick={() => sendSomething()}>Send</button>
    </>
  );
}

export default Home;
