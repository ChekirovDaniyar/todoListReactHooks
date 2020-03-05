import React from 'react'

const Todoitem = (props) => {
    return (
        <div id="todoWrapper" className="todo-wrapper">
            <p>{props.text}</p>
            <button
                className="delete-button"
                onClick = {()=>{
                    document.getElementById('todoWrapper').className = "deleted"
                }}
            >
                Delete
            </button>
        </div>
    )
}
export default Todoitem