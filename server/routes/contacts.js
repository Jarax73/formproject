const contactController = require("../controllers/contacts");
const express = require("express");
const router = express.Router();

router.post("/", contactController.createContact);

module.exports = router;