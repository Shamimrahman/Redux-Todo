import React,{useState} from 'react'
import './TodoForm.css'
import {add,del,clear} from '../action/index.js'
import {useDispatch} from 'react-redux'
const Todoform = () => {

    const [user,setUser]=useState({
        todo:""
    })
    
    let name,value;
    const inputhandleChange=(e)=>{
        name=e.target.name
        value=e.target.value

        setUser({...user,[name]:value})

    
    
    }    

    const dispatch = useDispatch()
    return (
        <div>
            <h1>Add your work</h1>
            <input placeholder="add" onChange={inputhandleChange}
            name="todo"
            value={user.todo}
            ></input>
            <br></br>
            <button>Add</button>
        </div>
    )
}

export default Todoform
