const contactController = require("../controllers/contacts");
const express = require("express");
const router = express.Router();

router.post("/", contactController.createContact);
router.get("/", contactController.getContacts);
router.get("/:id", contactController.getContact);
router.put("/:id", contactController.updateContact);

module.exports = router;