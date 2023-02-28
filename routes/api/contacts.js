const express = require("express");

const router = express.Router();

const {
  getAll,
  getById,
  add,
  updateById,
  updateStatusContact,
  deleteById,
} = require("../../controllers");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models");

router.get("/", getAll);

router.get("/:contactId", isValidId, getById);

router.post("/", validateBody(schemas.addSchema), add);

router.delete("/:contactId", isValidId, deleteById);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavorite),
  updateStatusContact
);

module.exports = router;
