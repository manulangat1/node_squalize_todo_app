const express = require('express')
const {creates} = require('../controllers/todo')
const {listd} = require('../controllers/list-todo')
const { getByName } = require('../controllers/check-todo')


const router = express.Router()


router.route('/').get(listd).post(creates)
router.route('/find/').get(getByName)

module.exports = router