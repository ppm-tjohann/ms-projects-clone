import {IconButton, Stack, Box} from '@mui/material'
import {PersonAdd} from '@mui/icons-material'

const Users = ({children}) => {
  return (<Stack direction={'row'} spacing={1}>
    <Stack spacing={-3} direction={'row'}>
      {children}
    </Stack>
    <Box><IconButton><PersonAdd/></IconButton></Box></Stack>)
}
export default Users