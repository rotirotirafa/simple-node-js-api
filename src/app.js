const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');
const app = express();
const router = express.Router(); //router é uma instancia do objeto Router, ou seja, é com ele que eu crio os endpoints da aplicação

//conexao com o banco
mongoose.connect(config.connectionString,
{ 
    useNewUrlParser: true , 
    useCreateIndex: true
});

//carrega models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//carrega rotas
const index = require('./routes/index');
const products = require('./routes/product');
const customer = require('./routes/customer');
const order = require('./routes/order');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 
    extended: false
}));

app.use('/', index);
app.use('/products', products);
app.use('/customer', customer);
app.use('/order', order);

module.exports = app;