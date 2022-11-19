const express = require("express");
const controller = require("../Controller/skillsController");
const router = express.Router();

//create routes
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);


module.exports = router;