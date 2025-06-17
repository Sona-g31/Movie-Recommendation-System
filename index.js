let app = require("./src/app.js");
let db = require("./config/db.config.js");
require("dotenv").config();

const PORT = process.env.service_port || 4000;

app.listen(PORT, () => {
  console.log(`Server started on port ` +PORT);
});
