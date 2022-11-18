const express = require("express");
// const dotenv = require("dotenv");
require("dotenv").config();

const app = express();

// const port = process.env.PORT || 5002;
app.get("/", (req, res) => {});

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at ${process.env.PORT}`)
});
