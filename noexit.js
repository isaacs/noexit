process.exit = require('util').deprecate(
  function() {},
  'Unwanted process.exit() call prevented by `noexit`')
