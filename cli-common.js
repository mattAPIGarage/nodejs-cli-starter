const util = require('util')
const emoji = require('node-emoji')
const yosay = require('yosay')
const cowsay = require('cowsay')
const figlet = require('figlet')

exports.hello = x => console.log(yosay(emoji.emojify(`hello ${x}, I :heart: :coffee: too!`)))

exports.noCoffee = () =>
  console.log(
    cowsay.say({
      text: 'No coffee for you!',
      e: 'oO',
      T: 'U ',
    }),
  )

exports.banner = msg => {
  return util.promisify(figlet)(msg)
}
