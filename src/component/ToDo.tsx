import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function ToDo() {
    const [list, setList] = React.useState<any>([])
    const [text, setText] = React.useState('')

    const api ='https://5fa6da9e085bf700163de946.mockapi.io/api/users/todoList'

    React.useEffect(()=>{
        show()
    }, [])

    const show =()=>{
        axios.get(api).then(res=>{
            console.log(res)
            setList(res.data)
            console.log(list)
        })
    }
    const add =() =>{
        axios.post(api,{
            text
        }).then(res =>{
            show()
        })
    }
  
    const deleteToDo = (id:string) =>{
        // console.log("Im here")
        axios.delete(`${api}/${id}`).then(res=>{
            setList(list.filter((ele:any)=> {
                return(ele.id != id) 
            }))
        })
    }

    // const updateToDo = (id:string) =>{
    //     // console.log("Im here")
    //     axios.put(`${api}/${id}`,{
    //         text
    //     }).then(res=>{
    //         show()
    //     })
    // }

    return (
    <div>
        <h1>ToDo</h1>
        <input type="text" onChange={e => setText(e.target.value)} />
        <button onClick={add}>ADD ToDo</button>
        <ul>
        {list.map((item:any) =>{
            return(
                <div>
                <li>{item.text}</li>
                <button onClick={(e)=>deleteToDo(item.id)}>DELETE ToDo</button>
                <Link to='/update'>

                <button onClick={()=>{localStorage.setItem("id", item.id)}}>UPDATE ToDo</button>
                </Link>
                </div>
            )
        })}
        </ul>
    </div>
  )
}

export default ToDo