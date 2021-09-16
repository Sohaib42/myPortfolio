const express = require("express");
const cors = require("cors");
const routes = require("./routes");


var corsOptions = {
  origin: "http://localhost:8081"
};

const PORT = process.env.PORT || 8080;

const db = require("./react-tuto/models/");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({
      extended: true
    }));

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
    app.use("/api", routes) // new

  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// simple route
// set port, listen for requests
