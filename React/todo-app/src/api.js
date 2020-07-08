import axios from 'axios'

const URL = 'https://todos-back-devf-activa.herokuapp.com/todos/';
  function getData(){
    axios.get(URL)
    .then((response)=>{
      let allTodos = response.data
      return allTodos
    }).catch((err)=>{
      console.log(err);
      return err
    });
  }


  export default getData
