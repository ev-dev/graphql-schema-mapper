// const Sequelize = require('sequelize')
// const { syncDb, database } = require('./test-db')
const allModelConfigs = require('./parse-test')


const defineModels = modelConfigs => {
  let varname = modelConfigs[0].modelName
  let value = 'value'
  this[varname] = 'model definition'

  console.log('User = ', User)
  
  // try {
  //   const db = await syncDb()
    
  //   const modelConfigs[0].modelName = await db.define(modelConfig.tableName, {

  // } catch (err) {
  //   console.error('Error loading Database...', err)
  // }
}

defineModels(allModelConfigs)
