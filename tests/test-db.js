const Sequelize = require('sequelize')

const database = new Sequelize(
  'postgress://localhost:5432/GSM-Test', {
    logging: false,
    operatorsAliases: Sequelize.Op
})

const syncDb = async () => {
  try {
    await database.sync({ force: true })
    return database
  } catch (err) {
    console.error('Error syncing DB...', err)
  }
}

module.exports = { syncDb, database }