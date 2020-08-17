import React from 'react'

const TaskContext = React.createContext({
  task: '',
  status: '',
  tasks: [],
  deleteTask: () => {},
  taskSubmit: () => {},
  inputChange: () => {},
  getTasks: () => {}
})

export default TaskContext