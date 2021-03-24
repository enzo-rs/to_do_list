const express = require('express');

const todoController = require("../controllers/todoController"); 

const router = express.Router();

router.get("/", todoController.findAll);
router.get("/listes/:id", todoController.findOne);
router.post("/listes", todoController.addOne);

module.exports = router;