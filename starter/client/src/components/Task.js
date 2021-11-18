import React from 'react'
import {useState, useEfect} from 'react'
import {ReactComponent as Delete} from '../assets/remove.svg'
import axios from 'axios'

const Task = (props) => {
    
    const [name, setName] = useState(props.name);
    const [completed, setCompleted] = useState(props.completed);
    const [id, setID] = useState(props.id);
    const deleteFunction = props.delete;

    return (
        <div class = "p-4 border-2 rounded-md mb-4" >
            <div class = "flex items-center justify-between">
                <div class = "flex items-baseline" > 
                    <input type="checkbox"></input>
                    <p class = "ml-4 text-lg float ">{name}</p>
                </div>
                
                <Delete class = "float-right fill-current" onClick = {() => deleteFunction(id)}/>
            </div>
            
        </div>
    )
}

export default Task
