const express = require("express");
const router = express.Router();

const MainController  = require ("../Controller/MainController");

router.route("/api/v1/save-user-data").post(MainController.signUp)
router.route("/api/v1/save-item-data").post(MainController.saveItem)
router.route("/api/v1/get-items-data").get(MainController.getItens)
router.route("/api/v1/login").post(MainController.login)

module.exports = router;