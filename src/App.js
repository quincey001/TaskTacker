import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'
// function App() {
//   const name = "brad";
//   const x = true;
//   return (
//     <div className="App">
//       <Header/>
//       <h1>Hello From React</h1>
//       <h2>Hello {name} </h2>
//       <h2>Hello {x ? "Yes" : "No"} </h2>
//     </div>
//   );
// }
const App = () => {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder:true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder:true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder:false,
        }
    ]
)
//Delete Task 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
//Toggle Reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} :task))
  console.log(id)
}
  return(
    <div className='container'>
      <Header/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'NO TASK'}
    </div>
  )
}
// class App extends React.Component{
//   render(){
//     return <Header/> 
//   }
// }

export default App;
