require("dotenv").config();

const express = require("express");
const connectBD = require("./config/db");
const colors = require("colors");

//Require Error Handling middleware
const {notFound, errorHandler} = require("./middlewares/errorMiddleware");

// ROUTES
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");

connectBD();
const app = express();
app.use(express.json()); // To accept json data

// const port = process.env.PORT || 5002;
// app.get("/", (req, res) => {});
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes)

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`.yellow.bold);
});
