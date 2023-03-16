'use strict'
const falso = require('@ngneat/falso')

const classLevels = ['I', 'II', 'III', 'IV', 'V', 'VI']

const getRandomClassName = (classLevels) => {
  const levelsRandomIndex = Math.floor(Math.random() * classLevels.length)
  const subject = falso.randSkill()
  const level = classLevels[levelsRandomIndex]
  const name = subject + ' ' + level
  return name
}

const courses = [...Array(50)].map(() => {
  const course = getRandomClassName(classLevels)
  return {
    name: course,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', courses, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {})
  }
}
