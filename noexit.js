// conditionnal patch for root because that user may need
// exit codes, e.g., for init.d scripts

if (process.getuid()) {
  process.exit = require('util').deprecate(
  function() {},
  'Unwanted process.exit() call prevented by `noexit`');
}
