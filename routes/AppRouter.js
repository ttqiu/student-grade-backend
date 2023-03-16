const router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const CourseRouter = require('./CourseRouter')
const GradeRouter = require('./GradesRouter')

router.use('/grades', GradeRouter)
router.use('/students', StudentRouter)
router.use('/courses', CourseRouter)

module.exports = router
