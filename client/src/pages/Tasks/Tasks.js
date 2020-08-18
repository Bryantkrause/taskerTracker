import React from 'react'
import axios from 'axios'
import TaskContext from '../../utils/TaskContext'
import TaskForm from '../../components/TaskForm'
import TaskDisplay from '../../components/TaskDisplay'

class Tasks extends React.Component {
  state = {
    task: '',
    status: '',
    tasks: [],
    inputChange: e => {
      this.setState({ [e.target.name]: e.target.value })
    },
    taskSubmit: e => {
      e.preventDefault()
      console.log(e)
      //this.setState({ [e.target.name]: e.target.value })
      axios.post(`/task`, {
        task: this.state.task,
        status: this.state.status
      })
        .then( ({data}) => {
          let arr = JSON.parse(JSON.stringify(this.state.tasks))
          arr.push(data)
          this.setState({ tasks: arr, task: '', status: ''  })
        })
    },
    deleteTask: _id => {
      console.log(_id)
      axios.delete(`/task/${_id}`,)
      .then( r => {
        axios.get('/tasks')
        .then( ({data}) => this.setState({ tasks: data }))
        console.log('data deleted')
        console.log(this.state)
      })
      .catch(e => console.error('cant delete', e))
    },
    getTasks: () => {
      console.log('getting tasks')
      axios.get(`/tasks`)
      .then (r =>{
        console.log('tasks recieved')
      })
      .catch(e => console.error('no task for you', e))
    }
  }

  componentDidMount() { // When the page loads grab the data from the database and update the tasks array
    axios.get('/tasks')
      .then( ({data}) => this.setState({ tasks: data }))
  }

  render () {
    return (
      <TaskContext.Provider value={this.state}>
          <TaskForm />
          <TaskDisplay />
      </TaskContext.Provider>
    )
  }
}

export default Tasks