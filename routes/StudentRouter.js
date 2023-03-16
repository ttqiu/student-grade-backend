
const router = require('express').Router();
const controller = require('../controllers/StudentController');

router.get('/', controller.GetAllStudents);
router.get('/only', controller.GetStudents);
router.get('/:id', controller.GetStudentById);
router.post('/register', controller.CreateStudent);
router.put('/:id', controller.UpdateStudentById);
router.delete('/:id/delete', controller.DeleteStudentById);

module.exports = router;