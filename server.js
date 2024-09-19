const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./DB/ConnectMongoDB")

require('dotenv').config();

const app = express();

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, console.log(`Servidor aberto na porta ${process.env.PORT}`));
    } catch (error) {
        console.log("Error ", error);
    }
}

app.get('/', (req, res) => {
    res.status(200).send("Funcionando");
});

app.use(express.json());
start();