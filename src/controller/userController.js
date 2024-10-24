const UsuarioSchema = require("../model/userModel");

const createAccount = async (req, res) => {

    const user = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        gestor: req.body.gestor == "gestor" ? true : false,
        descricao: req.body.descricao,
        departamento: req.body.departamento,
        sala: req.body.sala
    }

    const usuario = await UsuarioSchema.create(user);

    res.redirect("/login");
}

const getCreateAccount = async (req, res) => {
    return res.render("singup.ejs");
}

const loginAccount = async (req, res) => {

    const usuario = await UsuarioSchema.findOne({email: req.body.email});
    if(!usuario){
        res.send("erro de credenciais");
    }
    res.redirect("/");

}

const getloginAccount = async (req, res) => {
    return res.render("login.ejs");
}

const gethome = async (req, res) => {
    const gestores = await UsuarioSchema.find({gestor: true});
    return res.render("home.ejs", {users: gestores});
}

module.exports = {createAccount, getCreateAccount, loginAccount, getloginAccount, gethome}