var assert = require('assert')
var didNotExit = false
process.on('exit', function() {
  assert(didNotExit)
})

require('./noexit.js')
process.throwDeprecation = true
process.traceDeprecation = false
assert.throws(process.exit)

console.error = function(m) {
  assert(/noexit/.test(m))
}
process.throwDeprecation = false
process.traceDeprecation = false
process.exit()

console.error = function(m) {
  assert(m.indexOf(__filename) !== -1)
}
process.throwDeprecation = false
process.traceDeprecation = true
process.exit()

didNotExit = true

console.log('ok')
