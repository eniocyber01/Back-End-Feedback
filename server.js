const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const userRoute = require("./routes/userRoute");
const connectDB = require("./DB/ConnectMongoDB");

require('dotenv').config();

const app = express();

function renderView() {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.json());
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/src/view');
}
  renderView();  

const start = async () => {
    try{
        renderView();
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, console.log(`Servidor aberto na porta ${process.env.PORT}`));
    } catch (error) {
        console.log("Error ", error);
    }
}

app.use(express.json());
app.use("/", userRoute);

start();