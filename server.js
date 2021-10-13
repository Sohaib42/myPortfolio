const express = require("express");
const cors = require("cors");
const routes = require("./routes");
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
    app.use(cors({ origin: 'http://localhost:3000' , credentials :  true}));

    app.use(express.json());
    app.use(express.urlencoded({
      extended: true
    }));
    app.use("/api", routes);// new

    app.listen(PORT, () => {  
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// simple route
// set port, listen for requests
