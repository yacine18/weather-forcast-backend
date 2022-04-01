import dotenv from "dotenv";
dotenv.config();

import express from "express";
import router from "./routes.js";

const app = express();

app.use(express.json());

app.use("/api", router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server up and running on port: ", port);
});
