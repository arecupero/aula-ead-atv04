const express = require("express");
const app = express();

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

module.exports = app;