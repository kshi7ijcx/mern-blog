import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes.js";
import blogPostRoutes from "./routes/blogPostRoutes.js";

const app = express();
app.use(express.json());
app.use("/", userRoutes);
app.use("/blog", blogPostRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
    app.listen(process.env.PORT, () => {
      console.log(`server port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });