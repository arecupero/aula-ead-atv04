const express = require("express");
const app = express();

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cloud_atv4'
});

app.get("/", (request, response) => {
    return response
        .status(200)
        .json({
            message: "Teste"
        });
});

app.get("/liveness", (request, response) => {
    return response
        .status(200)
        .json({
            message: "APP Ativo",
            date: new Date().getTime()
        });
});

app.get("/readiness", (request, response) => {
    return response
        .status(200)
        .json({
            message: "APP Pronto",
            date: new Date().getTime()
        });
});

app.get("/select", (request, response) => {
    return response
        .status(200)
        .json({
            message: "Selecionando dados",
            date: new Date().getTime()
        });
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Conectado ao banco de dados");
    const sql = "CREATE TABLE ativ04 (Chave INT AUTO_INCREMENT PRIMARY KEY, campo01 VARCHAR(50), campo02 VARCHAR(50), campo03 VARCHAR(50))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result)
      console.log("Tabela ativ04 Criada");
    });
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Conectado ao banco de dados");
    const sql = "INSERT INTO ativ04 (campo01, campo02, campo03) VALUES ('valor1', 'valor2', 'valor3')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result)
      console.log("1 registro inserido");
    });
  });

  connection.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM ativ04", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

module.exports = app;