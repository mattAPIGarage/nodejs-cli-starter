const prompts = require('prompts')

const questions = [
  {
    type: 'text',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'number',
    name: 'age',
    message: 'How old are you?',
    validate: value => (value < 18 ? `Nightclub is 18+ only` : true),
  },
  {
    type: 'select',
    name: 'coffee',
    message: 'Do you like coffee?',
    choices: [{ title: 'yes', value: 'yes' }, { title: 'no', value: 'no' }],
    initial: 0,
  },
]

exports.askInput = async args => {
  const q = questions.filter(x => args[x.name] === undefined)
  const response = await prompts(q)
  return {
    ...args,
    ...response,
  }
}
