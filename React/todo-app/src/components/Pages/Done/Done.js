import React, { useState, useEffect } from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import ToDoCard from '../../ToDoCard/ToDoCard'
import axios from 'axios'

function Done() {
    const [todos, setTodos] = useState ([]);
    const URL = 'https://todos-back-devf-activa.herokuapp.com/todos/';
    useEffect (()=>{
        axios.get(URL)
        .then((response)=>{
            let allTodos = response.data
            setTodos(allTodos)
            // console.log(todos)
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    return (
        <>  
        <Header />
        <div className="container">
        <h3>Alta</h3>
        {todos.map((todo)=>{
            return (
                todo.priority === 1 && todo.done ?
                <ToDoCard 
                    priority = {todo.priority} 
                    name = {todo.name} 
                    done = {todo.done} 
                    key = {todo._id}
                />
                : undefined
            );
        })}

            </div>
            <Footer />  
        </>
    
    )
}

export default Done
