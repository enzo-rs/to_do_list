const express = require('express');

const todoController = require("../controllers/todoController"); 

const router = express.Router();

router.get("/", todoController.findAll);
router.get("/listes/:id", todoController.findOne);
router.post("/listes", todoController.addOne);
router.get("/task/:id_tasks", todoController.findTask);
router.post("/description/:id/:id_tasks", todoController.changeOne);

module.exports = router;