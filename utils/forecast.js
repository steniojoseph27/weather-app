const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/db960adf7f455d5f039aadc16b699b6e/' + latitude + ',' + longitude

    request ({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast