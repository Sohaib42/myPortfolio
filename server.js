require('dotenv').config()
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

const routes = require("./routes/routes");
const userRouter = require("./routes/userRoutes");


const db = require("./react-tuto/models/");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json(), urlencodedParser);
app.use('/api/auth', userRouter);
app.use("/api", routes);
db.mongoose
  .connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");


    app.use(cors({
      origin: 'http://localhost:3000',
      credentials: true
    }));


    // app.use("/api", routes);// new

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
    app.get('/', (req, res) => {
      res.json({ msg: 'Api route actualy working' })
    })

  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
app.use(express.json());

app.use(express.urlencoded({

  extended: true

}));

