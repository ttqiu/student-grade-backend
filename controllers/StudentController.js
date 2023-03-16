const { Student, Course } = require('../models');

const GetAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      include: [
        {
          model: Course,
          as: 'courses',
          through: { attributes: ['grade'] }
        }
      ]
    });
    res.send(students);
  } catch (err) {
    throw err;
  }
};

const GetStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (err) {
    throw err;
  }
};

const GetStudentById = async (req, res) => {
  try {
    const studentId = parseInt(req.params.id);
    const student = await Student.findByPk(studentId, {
      include: [
        {
          model: Course,
          as: 'courses',
          through: { attributes: ['grade'] }
        }
      ]
    });
    res.send(student);
  } catch (err) {
    throw err;
  }
};

const CreateStudent = async (req, res) => {
  try {
    const { firstName: firstName, lastName: lastName, email: email } = req.body;
    const student = await Student.create({
      firstName,
      lastName,
      email: email
    });
    return res.status(200).send({
      msg: `Student was created`,
      payload: student
    });
  } catch (err) {
    throw err;
  }
};

const UpdateStudentById = async (req, res) => {
  try {
    const studentId = parseInt(req.params.id);
    const updatedStudent = await Student.update(req.body, {
      where: { id: studentId },
      returning: true
    });
    return res.status(200).send({
      msg: `Student with id ${studentId} was updated`,
      payload: updatedStudent
    });
  } catch (err) {
    throw err;
  }
};

const DeleteStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    await Student.destroy({
      where: { id }
    });
    return res.status(200).send({
      msg: `Student with id ${student.id} was deleted`,
      payload: student
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  GetAllStudents,
  GetStudentById,
  CreateStudent,
  UpdateStudentById,
  DeleteStudentById,
  GetStudents
};