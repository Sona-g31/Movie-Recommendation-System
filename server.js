const app = require('./app');
const connectDB = require('./config/db.config'); // Call the DB connection
require('dotenv').config();

// Connect to DB (MongoDB or MySQL – see next step)
connectDB();

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
