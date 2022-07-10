import {Container, Grid, Stack, Typography} from '@mui/material'
import Task from '../components/Tasks/Task'
import TaskList from '../components/Tasks/TaskList'

const dummy_tasks = [
  {name: 'task-01', completed: false, id: 1},
  {
    name: 'task-02',
    completed: false,
    id: 2,
    description: 'Hallo Welt das ist' + ' eine Aufgabenbeschreibung',
  },
  {name: 'task-03', completed: false, id: 3},
  {name: 'task-04', completed: false, id: 4},
  {name: 'task-05', completed: false, id: 5}]

const Home = () => {

  return (<Container sx={{my: 3}}>
    <Typography variant={'h1'}>Home</Typography>
    <Grid container spacing={6}>
      <Grid item xs={12} md={6} lg={4}>
        <TaskList name={'Dummy Tasks'} tasks={dummy_tasks}/>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TaskList name={'Dummy Tasks 2'} tasks={dummy_tasks}/>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TaskList name={'Dummy Tasks 3'} tasks={dummy_tasks}/>
      </Grid>
    </Grid>
  </Container>)
}
export default Home