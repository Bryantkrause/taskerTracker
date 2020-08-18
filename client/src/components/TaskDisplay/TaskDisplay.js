import React from 'react'
import TaskContext from '../../utils/TaskContext'
import { Table } from 'reactstrap'

const TaskDisplay = () => {

  return (
    <TaskContext.Consumer>
      {
        ({tasks, deleteTask}) => (
          <>
            <Table dark>
              <thead>
                <tr>
                  <th><h4>#</h4></th>
                  <th><h4>Task</h4></th>
                  <th><h4>Status:</h4></th>
                  <th><h4>Created At:</h4></th>
                  <th><h4>Delete</h4></th>
                </tr>
              </thead>
              <tbody>
                  {
                    tasks.map( ( { _id, task, status, createdAt}, i) =>
                      <tr key={_id}>
                        <td>{i+1}</td>
                        <td>{task}</td>
                        <td>{status}</td>
                        <td>{createdAt}</td>
                        <td><button onClick={() => deleteTask(_id)}>Delete </button></td>
                      </tr>
                    )
                  }
              </tbody>
            </Table>
          </>
        )
      }
    </TaskContext.Consumer>
  )
}

export default TaskDisplay
