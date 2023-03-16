const Router = require('express').Router()
// const UserRouter = require('./UserRouter')
// const ClassRouter = require('./ClassRouter')
const CoursesRouter = require('./CoursesRouter')
// const ClassListRouter = require('./ClassListRouter')

// Router.use('/users', UserRouter)
// Router.use('/classes', ClassRouter)
Router.use('/courses', CoursesRouter)
// Router.use('/classlists', ClassListRouter)

module.exports = Router
