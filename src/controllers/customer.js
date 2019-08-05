
const repository = require('../respositories/customer-repository');
const md5 = require('md5');

exports.post = async(req, res, next) => {
    try{
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password)
        }
        )
        res.status(201).send({
            message: "Cliente cadastrado com sucesso"
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
    
}