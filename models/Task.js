module.exports = (model, Schema) => {
    const Task = new Schema({
        task: String,
        amount: Number,
        status: String
    })
    Task.plugin(require('mongoose-timestamp'))
    return model('Task', Task)
}