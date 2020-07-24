const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

//import routes
const beltRoutes = require("./routes/beltRoute");
const shoeRoutes = require("./routes/shoeRoute");

const app = express();

//app middleware
app.use(bodyParser.json());

app.use(cors()); //allow all origins

//middleware
app.use("/api/shoe", shoeRoutes);
app.use("/api/belt", beltRoutes);

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Api is running on port: ${port}`);
});
