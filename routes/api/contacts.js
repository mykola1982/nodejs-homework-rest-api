const express = require("express");

const router = express.Router();

const { controllersContacts } = require("../../controllers");

const {
  getAllContacts,
  getByIdContact,
  addContact,
  updateByIdContact,
  updateStatusContact,
  deleteByIdContact,
} = controllersContacts;

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", getAllContacts);

router.get("/:contactId", isValidId, getByIdContact);

router.post("/", validateBody(schemas.addSchema), addContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  updateByIdContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavorite),
  updateStatusContact
);

router.delete("/:contactId", isValidId, deleteByIdContact);

module.exports = router;
