import express from "express";
import apiRouter from "./routes/api-router.js";
import cors from "cors";

const app = express();
app.use(cors);
app.use(express.json());
app.use("/", apiRouter);

app.use((error, request, response, next) => {
  if (error.code && error.message) {
    response.status(error.code).send({ message: error.message });
  } else {
    response.status(400).send({ message: "Bad request" });
  }
});

export default app;
