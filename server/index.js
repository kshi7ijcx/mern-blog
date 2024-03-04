import express from "express";
import dotenv from "dotenv";
dotenv.config();

import blogPostRoutes from "./routes/blogPostRoutes.js";

const app = express();
app.use(express.json());
app.use("/blog", blogPostRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server port ${process.env.PORT}`);
});
