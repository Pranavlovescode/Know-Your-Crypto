require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const signupRoute = require("./routes/signup");
const data = require('./routes/showAllUsers')
const form = require('./routes/contactForm')

const app = express();
app.use(express.json());

// example route
app.get("/", (req, res) => {
  res.json({ message: "This is working" });
});


// Middlewares
app.use("/api/signup", signupRoute);
app.use('/show-all-users',data)
app.use('/api/contact-me',form)


// DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to MongoDB & Running on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
