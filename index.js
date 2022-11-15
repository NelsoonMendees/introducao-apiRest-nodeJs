// Configuração inicial
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const personRoutes = require("./routes/personRoutes");
require("dotenv").config();

// forma de ler JSON - middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/person", personRoutes);

// entregar uma porta
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@nodejs.zdr7y7m.mongodb.net/apidb?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conexão realizada com sucesso!");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
