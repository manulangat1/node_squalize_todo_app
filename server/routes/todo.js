const express = require('express')
const {creates} = require('../controllers/todo')


const router = express.Router()


router.route('/').post(creates)

module.exports = router