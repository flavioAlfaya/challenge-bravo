const { testSuite1 } = require('./integration/db.part')
const { testSuite2 } = require('./unit/integration.part')
const { testSuite3 } = require('./unit/currencies.part')
const { testSuite4 } = require('./integration/api.part')


describe('sequentially run tests', () => {
   testSuite1,
   testSuite2,
   testSuite3,
   testSuite4
})