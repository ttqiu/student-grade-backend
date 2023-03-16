const router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const CoursesRouter = require('./CoursesRouter')
const GradeRouter = require('./GradesRouter')

router.use('/grades', GradeRouter)
router.use('/students', StudentRouter)
router.use('/courses', CoursesRouter)

module.exports = router
