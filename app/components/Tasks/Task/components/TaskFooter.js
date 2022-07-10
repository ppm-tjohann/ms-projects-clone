import Users from './Users'
import {Avatar, Box} from '@mui/material'
import {useContext} from 'react'
import {TaskContext} from '../index'

const TaskFooter = () => {

  return (<Box sx={{py: 1}}>
    <Users>
      <Avatar variant={'circular'}/>
      <Avatar variant={'circular'}/>
    </Users>
  </Box>)
}
export default TaskFooter