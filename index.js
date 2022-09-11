const express = require("express");
const app = express();
const connectDb = require("./Config/ConnectDb");
require("dotenv").config({ path: "./Config/.env" });
const authRoute = require("./Routes/AuthRoute");
const AdminRoute = require("./Routes/AdminRoute");
const cartRoute = require("./Routes/cartRoute");
const postRoute = require("./Routes/postRoute");
const orderRoute = require("./Routes/orderRoute");
connectDb();
const port = process.env.PORT || 9000;

app.use(express.json());
app.listen(port, (err) => {
  if (err) {
    console.log("serever failed");
  }
  console.log(`server is running on port ${port}`);
});
app.use("/api", authRoute);
app.use("/api", AdminRoute);
app.use("/cart", cartRoute);
app.use("/post", postRoute);
app.use("/api", orderRoute);

