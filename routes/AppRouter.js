const router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const CoursesRouter = require('./CoursesRouter')
const GradeRouter = require('./GradesRouter')
const AuthRouter = require('./AuthRouter')

router.use('/grades', GradeRouter)
router.use('/students', StudentRouter)
router.use('/courses', CoursesRouter)
router.use('/auth', AuthRouter)

module.exports = router
