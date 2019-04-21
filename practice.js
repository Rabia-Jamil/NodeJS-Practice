const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const fs = require('fs')

/*const myEmail = "rabiajamil123@gmail.com"
console.log(validator.isEmail(myEmail))
//console.log("Hi rabia!")
console.log(chalk.bgGreen.red('Rabia jamil')) */
//console.log(process.argv.username) // this will give undefined in the output
//console.log(yargs.argv.username)

debugger

yargs.command({
    command: 'delete', //delete is command
    describe: 'Delete record..',
    builder: {
        title: {  //title is supporting argument (check its all conditions then perform some task)
            describe: 'title to delete',
            alias: 't',
            demandOption: false,
            type: 'string',
            //default: '...',
        },
        username: { //username is supporting argument
            describe: 'username to log',
            alias: 'un',
            demandOption: true,
            type: 'string',
            default: 'Rabia',
        },
    },

    handler: (argv) => {
        console.log("Deleting record by", argv.username)
        console.log("Title input by user is",argv.title)
    }
})

yargs.parse()

const myObj = {
    name: "Rabia Jamil",
    city: "Karachi",
    country: "Pakistan"
}

const newConvertedObj = JSON.stringify(myObj)

//console.log(myObj)
//console.log(newConvertedObj)

//fs.appendFileSync("data.txt", newConvertedObj)
try{
    const datareceived = fs.readFileSync("data.txt")
    const parsedData = JSON.parse(datareceived)
    console.log(datareceived.toString())
    console.log(parsedData)
}
catch(e){
    console.log("Error occured", e.message)
    //var datareceived = [] //var is for global scope
}
// datareceived.map()
