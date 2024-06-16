import  { useState } from "react"
import TextField from "./TextField"
import TaskContainer from "./TaskContainer"
export default function InputSection() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tasks, setTasks] = useState([
    { title: "react", description: "Success", id: 55 },
  ])
  const addButtonHandler = () => {
    console.log(title)
    console.log(description)
    const newTask = {
      title: title,
      description: description,
      id: crypto.randomUUID(),
    }
    setTasks((prevState) => [...prevState, newTask])
    setTitle('')
    setDescription('')
  }

  return (
    <>
      <div className="input-section" key={12}>
        <TextField
          placeholder="Enter Title here"
          value={title}
          key={4}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <TextField
          placeholder="Enter description here"
          value={description}
          key={545454}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
        <button key={952} onClick={addButtonHandler}>
          Add Task
        </button>
      </div>

      {tasks.map((task) => {
        return (
          <div>
            {task.title}
            {task.description}
            <button>Complete</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        )
      })}
    </>
  )
}
