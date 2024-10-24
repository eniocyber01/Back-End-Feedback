const express = require("express");
const router = express.Router();

const {
        createAccount,
        loginAccount,
        getloginAccount,
        getCreateAccount,
        gethome
    } = require("../src/controller/userController")

router.route('/register').get(getCreateAccount).post(createAccount);
router.route('/login').get(getloginAccount).post(loginAccount);
router.route('/').get(gethome);

module.exports = router;