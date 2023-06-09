'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsToMany(models.Student, {
        through: models.Grade,
        as: 'students',
        foreignKey: 'course_id'
      })
    }
  }
  Course.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      department: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses'
    }
  )
  return Course
}
