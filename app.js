// // const express = require('express');

// // let bodyParser=require("body-parser");
// // let db=require("./config/db.config");
// // const app = express();

// // app.use(db());
// // app.use(express.json());
// // app.use(bodyParser.urlencoded({ extended: false }));

// // app.get('/', (req, res) => {
// //   res.json({ message: " Server is working and DB Connected" });
// // });

// // module.exports = app;
// //const mongoose = require('express');
// //require('dotenv').config();

// //module.exports = () => {
//   //mongoose.connect(process.env.DB_URI, {
//     //useNewUrlParser: true,
//     //useUnifiedTopology: true
//  // })
//   //.then(() => console.log("DB connected"))
//   //.catch(err => console.log("DB connection error:", err));
// //};

// const app = require('./app');
// const connectDB = require('./config/db.config'); // Call the DB connection
// require('dotenv').config();

// // Connect to DB (MongoDB or MySQL – see next step)
// connectDB();

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: "Server is working and DB Connected" });
});

app.get("/", (req, res) => {
    res.render("dashboard.html"); 
});



module.exports = app; // ← only export the app, don't listen here


