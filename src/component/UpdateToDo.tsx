import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function UpdateToDo() {
    const [text, setText] = React.useState("")
    const [id, setId] = React.useState<any>('')
    const navigate=useNavigate()

    const api =`https://5fa6da9e085bf700163de946.mockapi.io/api/users/todoList/${id}` 

    React.useEffect(()=>{
        setId(localStorage.getItem('id'))
    },[])

    const updateInfo =() =>{
        axios.put(api,{
            text
        }).then(res=> {
            navigate("/")
    })
    }


  return (
    <div className='container'>
        <h1>ToDo List Update</h1>
        <input type="text" placeholder='ToDo Update' 
        onChange={e=>setText(e.target.value)} />
       
        <button onClick={updateInfo}> UPDATE</button>
    </div>
  )
}

export default UpdateToDo