const UsuarioSchema = require("../model/userModel");

const createAccount = async (req, res) => {
    console.log(req.body)
    const user = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        gestor: req.body.role == "gestor" ? true : false,
        descricao: req.body.descricao,
        departamento: req.body.departamento,
        sala: req.body.sala
    }

    const usuario = await UsuarioSchema.create(user);
    console.log(usuario);

    res.redirect("/login");
}

const getCreateAccount = async (req, res) => {
    return res.render("Cadastro.ejs");
}

const getAvaliacao = async (req, res) => {
    const usuario = await UsuarioSchema.find();
    return res.render("avaliacao_dos_funcionarios.ejs", { users: usuario });
}

const deleteByUser = async (req, res) => {
    const usuario = await UsuarioSchema.findByIdAndDelete(req.params.id);
    console.log(usuario);
    return res.json(usuario);
}
const getUserId = async (req, res) => {
    console.log(req.params.id)
    const usuario = await UsuarioSchema.findById(req.params.id);
    console.log(usuario)
    return res.json(usuario);
}

const getPerfisBusca = async (req, res) => {
    const usuario = await UsuarioSchema.find();
    return res.render("perfisBusca.ejs", { users: usuario });
}

const getHome = async (req, res) => {
    return res.render("sejaBemVindo.ejs");
}

const loginAccount = async (req, res) => {
    const usuario = await UsuarioSchema.findOne({ email: req.body.email });
    if (usuario) {
        if (usuario.senha === req.body.senha) {
            console.log(usuario);
            return res.redirect("/perfisBusca");
        }
    }

    return res.send("erro de login");
}

const getloginAccount = async (req, res) => {
    return res.render("login.ejs");
}

module.exports = { createAccount, getCreateAccount, loginAccount, getloginAccount, getHome, getPerfisBusca, getUserId, deleteByUser, getAvaliacao }