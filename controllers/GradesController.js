const { Grade } = require('../models')

const GetAll = async (req, res) => {
  try {
    const all = await Grade.findAll()
    res.send(all)
  } catch (err) {
    throw err
  }
}

const AssignStudentToCourse = async (req, res) => {
  try {
    const { studentId, courseId, grade } = req.body
    const gpa = await Grade.create({
      student_id: parseInt(studentId),
      course_id: parseInt(courseId),
      grade: parseInt(grade)
    })
    res.send(gpa)
  } catch (err) {
    throw err
  }
}

const GetAllCoursesByStudentId = async (req, res) => {
  try {
    const studentId = parseInt(req.params.id)
    const courses = await Grade.findAll({
      where: { student_id: studentId }
    })
    res.send(courses)
  } catch (err) {
    throw err
  }
}

const EditStudentCourseGrade = async (req, res) => {
  try {
    const { studentId, courseId } = req.body
    const updatedStudentGrade = await Grade.update(req.body, {
      where: { student_id: parseInt(studentId), course_id: parseInt(courseId) },
      returning: true
    })
    res.send(updatedStudentGrade)
  } catch (err) {
    throw err
  }
}

const DeleteStudentCourseGrade = async (req, res) => {
  try {
    await Grade.destroy({
      where: {
        student_id: parseInt(req.params.student_id),
        course_id: parseInt(req.params.course_id)
      },
      returning: true
    })
    return res.status(200).send({
      msg: `grade was deleted`
    })
  } catch (err) {
    throw err
  }
}

module.exports = {
  GetAll,
  AssignStudentToCourse,
  GetAllCoursesByStudentId,
  EditStudentCourseGrade,
  DeleteStudentCourseGrade
}
