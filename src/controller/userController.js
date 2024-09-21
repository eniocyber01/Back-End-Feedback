const UsuarioSchema = require("../model/userModel");

const createAccount = async (req, res) => {
    const user = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        descricao: req.body.descricao,
        departamento: req.body.departamento,
        sala: req.body.sala
    }

    const usuario = await UsuarioSchema.create(user);

    res.json(usuario);
}

const getLogin = async (req, res) => {
    return res.render("index.ejs");
}

module.exports = {createAccount, getLogin}