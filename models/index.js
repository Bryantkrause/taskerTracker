const { model, Schema } = require('mongoose')

module.exports = {
    Task: require('./Task.js')(model, Schema)
}