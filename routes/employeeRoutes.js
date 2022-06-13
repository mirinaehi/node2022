const express = require('express')
const router = express.Router();

const EmployeeController = require('../controllers/employeeController')

router.get('/showAll', EmployeeController.showAll)
router.get('/show', EmployeeController.show)
router.post('/insert', EmployeeController.insert)

module.exports = router