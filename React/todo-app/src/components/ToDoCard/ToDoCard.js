import React from 'react'
import DeleteTodo from '../DeleteTodo/DeleteTodo'

function ToDoCard(props) {
    const background = {
        "1": "card text-white bg-danger",
        "2": "card text-white bg-warning",
        "3": "card text-white bg-success",
    }
    return (
        <div className={background[props.priority]}>
            <div className="card-body">
                <div className="card-title">
                    <h3>{props.name}</h3>
                </div>
                <div className="card-text">
                    {props.done  ? <p>Done</p> : <p>Not Done</p>}
                    <DeleteTodo _id= {props._id} />
                </div>
            </div>
        </div>
    )
}

export default ToDoCard

