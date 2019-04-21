/*var printMsg = require('./msg')

 var msg = printMsg()

console.log(msg)*/

const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

/*const myEmail = "rabiajamil123@gmail.com"
console.log(validator.isEmail(myEmail))
//console.log("Hi rabia!")
console.log(chalk.bgGreen.red('Rabia jamil')) */
console.log(process.argv.username) // this will give undefined in the output
console.log('jsabfe')

yargs.command({
    command: 'delete',
    describe: 'Delete record..',
    builder: {
        title: {
            describe: 'title to delete',
            alias: 't',
            demandOption: true,
            type: 'string',
            default: '...',
        },
    },

    handler: (argv) => {
        console.log("Deleting record", argv.title)
    }
})