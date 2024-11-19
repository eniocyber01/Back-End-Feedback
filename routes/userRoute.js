const express = require("express");
const router = express.Router();

const {
    createAccount,
    loginAccount,
    getloginAccount,
    getCreateAccount,
    getPerfisBusca,
    getUserId,
    getHome
} = require("../src/controller/userController")

router.route('/singup').get(getCreateAccount).post(createAccount);
router.route('/login').get(getloginAccount).post(loginAccount);
router.route('/perfisBusca').get(getPerfisBusca).post(loginAccount);
router.route('/id/:id').get(getUserId).post(loginAccount);
router.route('/').get(getHome);

module.exports = router;