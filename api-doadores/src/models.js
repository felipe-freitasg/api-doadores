'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        default: '',
        index: true,
        required: [true, 'Nome é obrigatorio']
    },
    cnpj: {
        type: String,
        length: 14,
        default: '',
        required: [true, 'CNPJ é obrigatorio']
    },
    telefone: {
        type: String,
        length: 14,
        default: '',
        required: [true, 'telefone é obrigatorio']
    },
    endereco: {
        type: String,
        length: 100,
        default: '',
        required: [true, 'Endereco é obrigatorio']
    },
    numero: {
        type: String,
        length: 50,
        default: '',
        required: [true, 'Número é obrigatorio']
    },
    complemento: {
        type: String,
        length: 50,
        default: ''
    },
    cidade: {
        type: String,
        length: 100,
        default: '',
        required: [true, 'Ciade é obrigatorio']
    },
    estado: {
        type: String,
        length: 20,
        default: '',
        required: [true, 'Número é obrigatorio']
    },
    email: {
        type: String,
        length: 100,
        default: '',
        required: [true, 'Email é obrigatorio']
    },

    tags: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model('Doador', schema);
