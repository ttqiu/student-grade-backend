const router = require('express').Router()
const controller = require('../controllers/GradesController')

router.get('/', controller.GetAll)
router.get('/:id', controller.GetAllCoursesByStudentId)
router.put('/grade', controller.EditStudentCourseGrade)
router.post('/assign', controller.AssignStudentToCourse)

module.exports = router
