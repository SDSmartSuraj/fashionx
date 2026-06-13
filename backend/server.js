const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");


const productRoutes = require(
  "./routes/productRoutes"
);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Backend Server Running 🚀");
});

const PORT = 5000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});