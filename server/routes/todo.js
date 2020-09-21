const express = require('express')
const {creates} = require('../controllers/todo')
const {listd} = require('../controllers/list-todo')


const router = express.Router()


router.route('/').get(listd).post(creates)

module.exports = router