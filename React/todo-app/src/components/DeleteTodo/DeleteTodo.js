import React from 'react'
import axios from 'axios'

function DeleteTodo(props) {
    const URL = `https://todos-back-devf-activa.herokuapp.com/todos/${props._id}`;
    const useDelete = ()=>{
        axios.delete(URL)
        .then((response)=>{
            alert('ToDo Borrado')
            window.location.reload()
        }).catch((error)=>{
            alert(error)
        })
    }
    
    return (
        <>
            <button onClick={useDelete}className="btn btn-dark">Borrar</button>
        </>
    )
}

export default DeleteTodo
