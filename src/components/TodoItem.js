/* eslint-disable */

import React, { useState } from "react"
import styles from "./TodoItem.module.css"

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const [state, setState] = useState({
    editing: false,
  }); 

  const handleEditing = () => {
    setState({
      editing: true,
    })
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setState({ editing: false })
    }
  }

  let viewMode = {}
  let editMode = {}

  if (state.editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input 
          type="checkbox"
          className={styles.checkbox} 
          checked={props.todo.completed} 
          onChange={() => props.handleChangeProps(props.todo.id)}
        /> 
        <button onClick={() => props.deleteTodoProps(props.todo.id)}>
        Delete
        </button>
        <span style={props.todo.completed ? completedStyle : null}>
          {props.todo.title}
        </span>
      </div>
      <input 
        type="text" 
        style={editMode} 
        className={styles.textInput}
        value={props.todo.title}
        onChange={e => {
          props.setUpdate(e.target.value, props.todo.id)
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  )
}

export default TodoItem