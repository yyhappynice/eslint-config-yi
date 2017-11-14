const assert = require('assert')
const eslint = require('eslint')
const symbols = require('node-symbols')

const CLIEngine = eslint.CLIEngine
const cli = new CLIEngine()


const goodReport = cli.executeOnFiles([
  './**/good.js',
  './**/good.vue'
])

const badReport = cli.executeOnFiles([
  './**/bad.js',
  './**/bad.vue'
])

goodReport.results.forEach((goodReportForOneFile) => {
  assert.equal(goodReportForOneFile.errorCount, 0, `${goodReportForOneFile.filePath} should have no error`)
})

badReport.results.forEach((badReportForOneFile) => {
  assert(badReportForOneFile.errorCount > 0, `${badReportForOneFile.filePath} should have at least one error`)
})


console.log(symbols('smiley', 'green') + symbols(' Test passed ～', 'green'))
