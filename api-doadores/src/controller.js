'use strict'
const mongoose = require('mongoose');
const Doador = mongoose.model('Doador');

exports.post = (req, res, next) => {
    var doador = new Doador(req.body);
    doador
        .save()
        .then(x =>{
            res.status(201).send({ 
                message: 'Doador cadastrado'
            });
        }).catch(e => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar',
                data: e

            });
        });

};

exports.get = (req, res, next) =>{
    Doador
        .find({})
        .then(d =>{
            res.status(201).send(d);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.getById = (req, res, next) =>{
    Doador
        .findById(req.params.id)
        .then(d =>{
            res.status(201).send(d);
        }).catch(e => {
            res.status(400).send(e);
        });
}






exports.put = (req, res, next) => {
    Doador
        .findByIdAndUpdate(req.params.id, {
            $set: {
                nome: req.body.nome,
                cnpj: req.body.cnpj,
                telefone: req.body.telefone,
                endereco: req.body.endereco,
                numero: req.body.numero,
                complemento: req.body.complemento,
                cidade: req.body.cidade,
                estado: req.body.estado,
                email: req.body.email

            }

        }).then(x =>{
            res.status(201).send({
                message: 'Doador Atualizado'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar',
                data: e

            });

        });
};



exports.delete =(req, res, next) => {
    Doador
        .findOneAndRemove(req.body.id)
        .then(x =>{
            res.status(201).send({
                message: 'Doador Removido'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover doador',
                data: e

            });

        });
};
