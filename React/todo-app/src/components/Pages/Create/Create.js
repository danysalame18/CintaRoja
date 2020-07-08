import React, { useState } from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import axios from 'axios'

function Create() {
    const URL = 'https://todos-back-devf-activa.herokuapp.com/todos/'
    const [name, setName] = useState('');
    const [done, setDone] = useState(false);
    const [priority, setPriority] = useState('');
    const clear = ()=>{
        setName('');
        setDone(false);
        setPriority('');
    }
    const saveTodo = (event)=>{
        event.preventDefault();
        console.log('Dieron click')
        if(priority === 0){
            alert('Selecciona una prioridad valida')
        }else{
        axios.post(URL, {
            name,
            done,
            priority,
        }).then(()=>{
            alert ('Creado con exito')
            clear()
        }).catch((error)=>{
            alert('Hubo un error')
            console.log(error)
         });
        }
    }
    return (
    <>
    <Header />
    <div className= "container">
    <h3>Crear un To Do</h3>
    <form onSubmit={saveTodo}>
        <div className="form-group">
        <input 
            className= "form-control" 
            type ="text"   
            placeholder = "Que tarea tienes??" 
            value={name}
            required
            onChange ={(e)=>{setName(e.target.value)}}
        />
        <br />  
        <label>Ya esta hecho??</label> 
        <input 
            className= "form-control" 
            type ="checkbox"
            value={done}
            onChange ={()=>{
                if(!done){
                    setDone(true);
                }else{
                    setDone(false)
                }
            }}
        />
        <br />
        {/* <label>Seleccioa el nivel de prioridad</label> */}
        <select className="form-control" value={priority}
            name = {priority}
            onChange ={(e) => {
                setPriority(e.target.value)
            }}
        >
            <option value="0">Selecciona nivel de prioridad</option>
            <option value="3">Baja</option>
            <option value="2">Media</option>
            <option value="1">Alta</option>
        </select>
        <br />
        <button type = "submit" className="btn btn-success">Crear To Do</button>
        </div>
    </form>
    </div>
    <Footer />           
    </>
    );
}

export default Create
