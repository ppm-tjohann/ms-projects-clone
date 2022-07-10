import {Box, Checkbox, Typography} from '@mui/material'
import {useContext} from 'react'
import {TaskContext} from '../index'

const TaskHeader = () => {
  const {name, completed, handleTaskClick} = useContext(TaskContext)

  return (<Box sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: 1,
  }}>
    <Typography variant={'h5'}>{name}</Typography>
    <Box><Checkbox checked={completed} onClick={handleTaskClick}/></Box>
  </Box>)
}
export default TaskHeader