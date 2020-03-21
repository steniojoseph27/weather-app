const request = require('request')
const url = 'https://api.darksky.net/forecast/db960adf7f455d5f039aadc16b699b6e/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})
