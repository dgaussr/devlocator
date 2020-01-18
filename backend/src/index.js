const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://ricardo:180892@cluster0-ebzzj.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);

//query params: usados apenas no get pois nao aceita corpo request.query(filtro, ordenação,paginação)
//route params: put and delete: 1 usuario request.params alteração ou remoção
//body: post and put: JSON request.body

app.listen(3333);

//mongoose mongodb+srv://ricardo:<password>@cluster0-ebzzj.mongodb.net/test?retryWrites=true&w=majority
