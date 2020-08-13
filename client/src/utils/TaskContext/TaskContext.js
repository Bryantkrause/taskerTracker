import React from 'react'

const TaskContext = React.createContext({
  task: '',
  status: '',
  tasks: [],
  taskSubmit: () => { },
  inputChange: () => { },
  getTasks: () => {}
})

export default TaskContext