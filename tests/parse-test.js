const gql = require('graphql-tag')
const eyes = require('eyes')
const chalk = require('chalk')

const testType = gql`
  type User @model {
    username: String! @isUnique
    email: String
    age: Number
  }

  type Post @model {
    content: String!
  }
`

const { definitions } = testType
// console.log(chalk.yellow(`
//   ---  testType Definitions ---
// `))
// eyes.inspect(definitions)

const formatDefs = defs => {
  const modelConfigs = []
  
  for (const def of defs) {
    if (def.kind !== 'ObjectTypeDefinition') break
    if (def.directives[0].name.value !== 'model') break
    
    const currConfig = {
      tableName: def.name.value.toLowerCase(),
      modelName: def.name.value,
      fields: []
    }
    
    for (const field of def.fields) {
      const currFields = {
        name: field.name.value,
        type: '',
        validations: {
          allowNull: false,
          unique: false
        }
      }

      if (field.type.kind === 'NonNullType') {
        currFields.type = field.type.type.name.value
        currFields.validations.allowNull = true
      } else {
        currFields.type = field.type.name.value
      }

      if (field.hasOwnProperty('directives')) {
        for (const directive of field.directives) {
          if (directive.name.value === 'isUnique') {
            currFields.validations.unique = true
          }
        }
      }
      currConfig.fields.push(currFields)
    }
    modelConfigs.push(currConfig)
  }
  return modelConfigs
}
const allModelConfigs = formatDefs(definitions)

// console.log(chalk.yellow(`
//   ---  testType Model Configs ---
// `))
// eyes.inspect(allModelConfigs)



// const testModelConfig = {
//   tableName: 'user',
//   modelName: 'User',
//   fields: [{
//     name: 'username',
//     type: 'String',
//     validations: {
//       allowNull: true,
//       unique: true
//     }
//   }, {
//     name: 'email',
//     type: 'String',
//     validations: [{
//       allowNull: true,
//       unique: true
//     }]
//   }]
// }

module.exports = allModelConfigs

