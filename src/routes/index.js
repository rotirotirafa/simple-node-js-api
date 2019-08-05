const express = require('express');
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    //rota de teste
    res.status(200).send({
        title: "node store API",
        version: "0.0.1"
    });
});

module.exports = router;