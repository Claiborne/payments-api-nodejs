const express = require('express')
const userController = require('./../controllers/user')

const router = express.Router()

router.route('/')
  .get(userController.getUsers)
  .post(userController.createUser)

module.exports = router 