const lib = require('./cli-common')

exports.getCoffee = response =>
  response.coffee === 'yes' ? lib.hello(response.name) : lib.noCoffee()
