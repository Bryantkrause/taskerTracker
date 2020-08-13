import React from 'react'
import TaskContext from '../../utils/TaskContext'
import { Button, Form, Label, Input } from 'reactstrap'


const MovieForm = () => {
  return (
    <TaskContext.Consumer>
      {
        ( {task, assignedTo, status, taskSubmit, inputChange} ) => (
        <Form>
          <Label htmlFor="task">Input Task</Label>
          <Input type="text" placeholder="Insert a task here" name="task" onChange={inputChange} value={task}/>
          <Label htmlFor="status">Status</Label>
          <Input type="text" placeholder="What's the status?" name="status" onChange={inputChange} value={status}/>
          <Button id="submit" className="btn" color="primary" onClick={taskSubmit}>Add Task</Button>
        </Form>
        )
      }
    </TaskContext.Consumer>
  )
}

export default MovieForm