import {
  Checkbox, Box, Paper, Typography, Divider, Avatar, Slide, Button,
} from '@mui/material'
import TaskHeader from './components/TaskHeader'
import Users from './components/Users'
import {createContext, useContext, useState} from 'react'
import {TaskListContext} from '../TaskList'
import TaskFooter from './components/TaskFooter'

export const TaskContext = createContext({
                                           name: '', completed: false, id: 0,
                                         })

const Task = ({name, completed, id, description}) => {

  const {handleTaskCompletion, handleTaskRevoke} = useContext(TaskListContext)
  const [slide, setSlide] = useState(false)

  const handleTaskClick = () => {
    setSlide(false)
    if (completed) {
      console.log('REVOKING')
      handleTaskRevoke({name, id})
    }
    else {
      handleTaskCompletion({name, id})
    }
  }

  const handleCompletionClick = () => {
    handleTaskCompletion({name, completed, id})
  }

  return (<TaskContext.Provider
      value={{name, completed, id, handleTaskClick}}>
    <Slide direction={completed ? 'right' : 'left'} unmountOnExit mountOnEnter
           in={!slide} timeout={700}>
      <Paper sx={{py: 1, px: 2, my: 1}}>
        <TaskHeader/>
        {!completed && description?.length !== 0 && <Box sx={{mb: 3}}>
          <Typography variant={'body1'}>{description}</Typography>
        </Box>}
        {!completed && <>
          <Divider/>
          <Button>Test Button</Button>
          <TaskFooter/>
        </>}
      </Paper>
    </Slide>
  </TaskContext.Provider>)
}

export default Task
