import React, { useState, useEffect } from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import ToDoCard from '../../ToDoCard/ToDoCard'
import axios from 'axios'
// import getData from '../../../api'

function Home() {
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
      <h2>Bienvenido a ToDo!!!</h2>

      <div className="container">
      <h3>Alta</h3>
      {todos.map((todo)=>{
          return (
            todo.priority === 1 ?
            <ToDoCard 
              priority = {todo.priority} 
              name = {todo.name} 
              done = {todo.done} 
              _id = {todo._id}
              key = {todo._id}
            />
            : undefined
          );
        })}
        <h3>Media</h3>
        {todos.map((todo)=>{
          return (
            todo.priority === 2 ?
            <ToDoCard 
              priority = {todo.priority} 
              name = {todo.name} 
              done = {todo.done}
              _id = {todo._id}
              key = {todo._id}
            />
            : undefined
          );
        })}
        <h3>Baja</h3>
        {todos.map((todo)=>{
          return (
            todo.priority === 3 ?
            <ToDoCard 
              priority = {todo.priority} 
              name = {todo.name} 
              done = {todo.done}
              _id = {todo._id}
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

export default Home
