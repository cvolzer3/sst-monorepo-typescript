import { generateString } from "@my-workspace/common/src/utils/generateString";
import express from "express";
import http from "node:http";

const app = express();
const server = http.createServer(app);

app.use("/", (req, res) => {
  res.send(generateString());
});

server.listen(80, () => {
  console.log(`App backend listening on port 80`);
});
