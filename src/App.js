import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [text, setText] = useState('')
  let [array, setArray] = useState([])

  const changeHandler = (event) => {
    setText(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setArray([text, ...array])
    setText('')
  }

  return (
    <div>
      <h1>To-do list in React using Hooks</h1>
      <div className="todo-wrapper">
        {array.map(item => <div className="todo-item">
          <p>{item}</p>
          <button
            className="ui red button"
            onClick={() => {
              array = array.filter(e => e !== item)
              setArray(array)
            }}
          >
            <i class="material-icons">
              delete
            </i>
          </button>
        </div>
        )}
      </div>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <input
          type="text"
          value={text}
          placeholder="Type here..."
          onChange={(event) => { changeHandler(event) }}
        />
        <button className="ui green button">Add To-do</button>
      </form>
    </div>
  )
}



export default App;
