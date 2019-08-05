const guid = require('guid');
const repository = require('../respositories/order-repository');

exports.post = async(req, res, next) => {
    let data = {
        customer: req.body.customer,
        number: guid.raw().substring(0,6),
        items: req.body.items
    };
//atencao
    try{
        await repository.create(data)
        res.status(201).send({
            message: "Pedido cadastrado com sucesso"
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.get = async(req, res, next) => {
    try{
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
    
}