const contactController = require("../controllers/contacts");
const express = require("express");
const router = express.Router();

router.post("/", contactController.createContact);
router.get("/", contactController.getContacts);

module.exports = router;