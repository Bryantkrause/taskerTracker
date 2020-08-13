import React from 'react'
import TaskContext from '../../utils/TaskContext'
import { Table } from 'reactstrap'

const TaskDisplay = () => {
  return (
    <TaskContext.Consumer>
      {
        ({tasks}) => (
          <>
            <Table dark>
              <thead>
                <tr>
                  <th><h4>#</h4></th>
                  <th><h4>Task</h4></th>
                  <th><h4>Status:</h4></th>
                  <th><h4>Created At:</h4></th>
                  <th><h4>Last Updated:</h4></th>
                </tr>
              </thead>
              <tbody>
                  {
                    tasks.map( ( { _id, task, status, createdAt, updatedAt}, i) =>
                      <tr key={_id}>
                        <td>{i+1}</td>
                        <td>{task}</td>
                        <td>{status}</td>
                        <td>{createdAt}</td>
                        <td>{updatedAt}</td>
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
