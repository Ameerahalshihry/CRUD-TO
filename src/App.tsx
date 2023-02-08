import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ToDo from './component/ToDo'
import {Routes, Route} from 'react-router-dom'
import UpdateToDo from './component/updateToDo'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ToDo/>}></Route>
        <Route path='/update' element={<UpdateToDo/>}></Route>
      </Routes>

   
    </div>
  )
}

export default App
