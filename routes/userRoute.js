const express = require("express");
const router = express.Router();

const {
        createAccount,
        getLogin
    } = require("../src/controller/userController")

router.route('/').get(getLogin).post(createAccount);

module.exports = router;