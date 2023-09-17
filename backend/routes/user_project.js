var express = require('express');
var router = express.Router();
const user_projectController = require("../models/controller/user_project")
const {authenticateUser} = require("../middleware/authenticate")





router.post('/',authenticateUser, user_projectController.addProject_addUser)
router.delete("/:id",authenticateUser, user_projectController.projectDetailsOfLoginUser)


module.exports = router;