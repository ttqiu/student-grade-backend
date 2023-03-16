'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const students = await Promise.all(
      [...Array(100)].map(async () => {
        return {
          firstName: falso.randFirstName(),
          lastName: falso.randLastName(),
          email: falso.randEmail(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('students', students)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {})
  }
}
