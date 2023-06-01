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

app.get('/criar-tabela', function (request, response) {
  connection.query(
    `CREATE TABLE ativ04 (
    chave INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    campo01 VARCHAR(50) NOT NULL,
    campo02 VARCHAR(50),
    campo03 VARCHAR(50));`,
    function (err, result) {
      if (err) {
        return response.status(500).json('Erro ao criar tabela');
      }
      else {
        return response.json(result);
      }
    });
});

app.get('/inserir-dados', function (request, response) {
  connection.query(
    `INSERT INTO ativ04 (campo01, campo02, campo03) VALUES ('valor1', 'valor2', 'valor3');`,
    function (err, result) {
      if (err) {
        return response.status(500).json('Erro ao inserir dados na tabela');
      }
      else {
        return response.json(result);
      }
    });
});

app.get('/consulta-dados', function (request, response) {
  connection.query("SELECT * FROM ativ04;",
    function (err, result) {
      if (err) {
        return response.status(500).json('Erro ao consultar os dados.');
      }
      else {
        return response.json(result);
      }
    });
});

module.exports = app;