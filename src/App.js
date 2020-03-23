import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [state, setState] = useState({
    text: '',
    array: []
  })

  const changeHandler = (event) => {
    setState({
      text: event.target.value,
      array: state.array
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setState({
      text: '',
      array: [...state.array,state.text]
    })
  }

  return (
    <div>
      <h1>To-do list in React using Hooks</h1>
      <h2>You have {state.array.length} to-do</h2>
      <div className="todo-wrapper">
        {
          state.array.map((item) => {
            return (
              <div className="todo-item">
                <p>{item} № <strong>{state.array.indexOf(item) + 1}</strong></p>
                <button
                  className="ui red button"
                  onClick={() => {
                    const shouldDelete = window.confirm('Are you sure you want to delete?')
                    if (shouldDelete) {
                      state.array = state.array.filter(e => e !== item)
                      setState({
                        text: state.text,
                        array: state.array
                      })
                    }
                  }}
                >
                  <i class="material-icons">
                    delete
                </i>
                </button>
              </div>
            )
          })
        }
      </div>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <input
          type="text"
          value={state.text}
          placeholder="Type here..."
          onChange={(event) => { changeHandler(event) }}
        />
        <button className="ui green button">Add To-do</button>
      </form>
    </div>
  )
}

export default App;