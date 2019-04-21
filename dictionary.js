
// console.log("start")

// setTimeout(() => {
//     console.log("Timeout completed after 3 seconds")
// }, 3000)

// setTimeout(() => {
//     console.log("Timeout completed after 0 seconds")
// }, 0)

// console.log("End") 
var request = require('request')
const chalk = require('chalk')


const word = process.argv[2]
console.log(chalk.magenta(" Word :"),chalk.blue(word))
console.log("")
const options = {
    url: 'https://od-api.oxforddictionaries.com/api/v1/entries/en/' + word,
    headers : {
        "Accept": "application/json",
        "app_id": "c809585f",
        "app_key": "a597212a0cd403a49331c470131d007c"
    },
    json: true //we will receive parsed converted data from server
}

const callback = ( error, response ) => {
    // const r = requests.get('http://www.google.com/')
    // console.log(r.reason)
    if(response && (response.statusCode === 200) && word !== undefined){
        const definition = response.body.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
        const short_definition = response.body.results[0].lexicalEntries[0].entries[0].senses[0].short_definitions[0]
        // console.log("Status code : ", response && response.statusCode)
         console.log(chalk.underline.yellow(" Meanings/Definitions " ))
         console.log("")
         console.log(chalk.magenta(" Definition : "), chalk.green(definition ) )
         console.log(chalk.magenta(" Short Definition : "), chalk.green(short_definition)  )
         console.log("")
    }
    else if(response && (response.statusCode === 404)){
        console.log(chalk.red("Word not found!"))
    }
    else if(word === undefined){
        console.log(chalk.red("Please specify a word!"))
    }
    else{
        console.log("error : ", error)
    }
} 

request(options, callback)