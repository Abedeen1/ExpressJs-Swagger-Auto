import express from "express";
const app = express();
const expressOasGenerator = require('express-oas-generator');
expressOasGenerator.init(app, {}); // to overwrite generated specification's values use second argument.

import indexRoutes from "./routes/index";

// middleware
app.use(express.json())

app.use(indexRoutes);
app.use(express.urlencoded({extended: false}))

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
