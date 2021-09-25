'use strict'

const express = require('express');7
const bodyParser = require('body-parser');7
const mongoose = require('mongoose');

//conexão banco
mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false');

//carregar models
const Doador = require('../src/models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//carregando rotas
const routes  = require('../src/routes');



app.use('/', routes);
module.exports = app;