#!/usr/bin/env node

const program = require('commander')
const lib = require('./cli-common')
const prompts = require('./prompts')
const actions = require('./actions')

const greeting = async (msg) => {
  const greeting = await lib.banner('Welcome')
  console.log(greeting)
} 

const entry = async () => {
  // await greeting()
  program
    .version('0.1.0')
    .usage('--name <name> --age <age> --coffee <yes or no>')
    .option('-n, --name <name>', 'your name', 'na')
    .option('-a, --age <age>', 'your age', parseInt)
    .option('-c, --coffee', 'with coffee please!')
    .parse(process.argv)
    
  const response = await prompts.askInput({
    name: program.name !== 'na' ? program.name : undefined,
    age: program.age, // FIXME: not validated via the prompts validation!
    coffee: !program.coffee ? program.coffee : 'yes',
  })
  actions.getCoffee(response)
  
}

entry()

