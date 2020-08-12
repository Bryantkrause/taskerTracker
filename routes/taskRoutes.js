const { Task } = require('../models')

module.exports = app => {
  app.post('/task', (req, res) =>{
    Task.create(req.body)
    .then( response => res.json(response) )
    .catch(e => console.error(e))
  })
  app.get('/tasks', (req, res) => {
    Task.find()
    .then(task => res.json(task))
    .catch(e => console.error(e))
  })
  app.get('/task/:id', (req, res) => {
    Task.findOne({ _id: req.params.id })
    .then(task => res.json(task))
    .catch(e => console.error(e))
  })
  app.delete('/task/:id', (req, res) => {
    Task.deleteOne( { _id: req.params.id } ) // Get the row of the task of the ID.
      .then( response => res.json(response) )
      .catch(e => console.error(e))
  })
  app.put('/task/:id', (req, res) => {
    Task.updateOne({ _id: req.params.id}, { $set: req.body})
      .then( response => res.json(response) )
      .catch(e => console.error(e))
  })
}
