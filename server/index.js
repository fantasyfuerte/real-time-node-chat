import express from "express";
import logger from "morgan";
import {Server} from "socket.io"
import { createServer } from "node:http";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(logger("dev"));

app.get("/", (req, res) => {
  const indexFile = process.cwd() + "/client/index.html";
  res.sendFile(indexFile);
});

app.listen(port, () => {
  console.log(`🚀Server running on port ${port}`);
});
