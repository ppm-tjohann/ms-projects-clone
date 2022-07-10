import Task from '../Task'
import {
  Box, Collapse, Divider, IconButton, Paper, Typography,
} from '@mui/material'
import {createContext, useState} from 'react'
import {TransitionGroup} from 'react-transition-group'
import {Add} from '@mui/icons-material'

export const TaskListContext = createContext({
                                               handleTaskCompletion: () => {},
                                               handleTaskRevoke: () => {},
                                             })

const TaskList = ({name, tasks}) => {

  const [completedTasks, setCompletedTasks] = useState(
      tasks.filter(task => task.completed))

  const [doingTasks, setDoingTasks] = useState(
      tasks.filter(task => !task.completed))

  // mark task as completed
  const handleTaskCompletion = (task) => {
    if (completedTasks.filter(cTask => cTask.id === task.id).length !== 0) {
      return
    }
    setCompletedTasks([
                        {...task, completed: true}, ...completedTasks])
    setDoingTasks(doingTasks.filter(dTask => dTask.id !== task.id))
  }

  // mark completed task as uncomplete
  const handleTaskRevoke = (task) => {
    if (doingTasks.filter(dTask => dTask.id === task.id).length !== 0) {
      return
    }
    setDoingTasks([...doingTasks, {...task, completed: false}])
    setCompletedTasks(completedTasks.filter(cTask => cTask.id !== task.id))
  }

  const getList = (taskList) => {
    return (<TransitionGroup>
      {taskList.map(task => <Collapse key={task.id} timeout={700}>
        <Task {...task} key={task.id}/>
      </Collapse>)}
    </TransitionGroup>)
  }

  return (<TaskListContext.Provider
      value={{handleTaskCompletion, handleTaskRevoke}}>
    <Box sx={{my: 6}}>
      <Typography variant={'h2'}>{name}</Typography>
      <Paper sx={{display: 'flex', alignItems: 'center', py: 1, px: 2, my: 1}}>
        <IconButton sx={{mr: 2}}><Add/></IconButton>
        <Typography variant={'h5'}>Add Task</Typography>
      </Paper>
      {getList(doingTasks)}

      <Divider sx={{my: 3}} color={'primary'}/>
      <Box>
        {getList(completedTasks)}
      </Box>

    </Box>
  </TaskListContext.Provider>)
}
export default TaskList
