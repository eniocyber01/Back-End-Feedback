const mongoose = require("mongoose");
const validator = require('validator');

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
        unique: true,  // para garantir que não existam e-mails duplicados
        lowercase: true,  // para armazenar em minúsculas
        validate: [validator.isEmail, 'Invalid email address']
    },
    senha: {
        type: String,
        required: true,
        minlength: 8  // comprimento mínimo para aumentar a segurança
    },
    descricao: {
        default: "Descriçao não foi cadastrada...",
        type: String,
        required: false,  // Pode ser obrigatório dependendo da aplicação
        maxlength: 150   // Limite de caracteres, se necessário
    },
    gestor: {
        type: Boolean,
        default: false,
        required: true
    },
    departamento: {
        default: "Departamento não configurado...",
        type: String,
        required: false
    },
    sala: {
        default: "Sala não configurada...",
        type: String,
        required: false
    },
    nota: {
        type: Number,
        required: true,
        default: 0,
        min: 0,   // Valor mínimo
        max: 10   // Valor máximo, por exemplo
    },
    nota_comunicacao: {
        type: Number,
        required: true,
        default: 0,
        min: 0,   // Valor mínimo
        max: 10   // Valor máximo, por exemplo
    }, 
    nota_agilidade: {
        type: Number,
        required: true,
        default: 0,
        min: 0,   // Valor mínimo
        max: 10   // Valor máximo, por exemplo
    }, 
    nota_equipe: {
        type: Number,
        required: true,
        default: 0,
        min: 0,   // Valor mínimo
        max: 10   // Valor máximo, por exemplo
    }, 
    nota_assiduidade: {
        type: Number,
        required: true,
        default: 0,
        min: 0,   // Valor mínimo
        max: 10   // Valor máximo, por exemplo
    }
});

module.exports = mongoose.model('Usuarios', UsuarioSchema);