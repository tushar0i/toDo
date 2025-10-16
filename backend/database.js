const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todoModel = mongoose.model('todos',todoSchema)
module.exports = {
    todoModel
}
