const express = require('express')
const {creates} = require('../controllers/todo')
const {listd} = require('../controllers/list-todo')
const { getByName } = require('../controllers/check-todo')
const { updated } = require('../controllers/u')
const { dels} = require('../controllers/d')


const router = express.Router()


router.route('/').get(listd).post(creates)
router.route('/find/').get(getByName)
router.route('/find/:id/').put(updated)
router.route('/del/:id/').delete(dels)


module.exports = router