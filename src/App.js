import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState(
     [
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "May 5th at 2:30pm",
      "reminder": false
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "May 6th at 2:30pm",
      "reminder": false
    },
    {
      "id": 3,
      "text": "Food Shopping",
      "day": "May 7th at 12:30pm",
      "reminder": false
    },
    {
      "text": "Visit art gallery",
      "day": "April 6th 3:00pm",
      "reminder": true,
      "id": 4
    },
    {
      "text": "Running",
      "day": "June 8th 12 noon",
      "reminder": true,
      "id": 5
    },
    {
      "text": "Yoga",
      "day": "March 9th 8:00am",
      "reminder": true,
      "id": 6
    }
  ])

//Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }
  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id===id ? {
      ...task, reminder: !task.reminder } : task))
    
  
  }
 //Delete Task
  const deleteTask = (id) => { 
    setTasks(tasks.filter((task) => task.id !== id))
     
     }


  return (
    <div className="container">
      <Header/>
      <AddTask onAdd={addTask}/>
      { tasks.length > 0 ? (<Tasks tasks = {tasks} 
        onDelete={deleteTask} onToggle={toggleReminder}/>
        ) : ( 'No tasks to show') }
    </div>

    )
  }


export default App;
