import React,{useState} from 'react'
import './TodoForm.css'
import {add,del,clear} from '../action/index.js'
import {useDispatch ,useSelector} from 'react-redux'
import todoRed from '../reducer/Todo'
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

    const addtodo=()=>{
        dispatch(add(user),setUser(''))
    }

    const deltodo=()=>{
        dispatch(del())
    }

   
     const myData = useSelector((state) =>state. todoRed.list)
    return (
        <div>
            <h1>Add your work</h1>
            <input placeholder="add" onChange={inputhandleChange}
            name="todo"
            value={user.todo}
            ></input>
            <br></br>
            <button onClick={addtodo}>Add</button>

                    {/** del data */}

            
            {myData.map((ele)=>{
                return(
                    <div>
                    <p>{ele.list}</p>

                                <button onClick={deltodo}>Delete</button>


                    </div>




                )
            })}
          
            

        </div>

    )
}

export default Todoform
