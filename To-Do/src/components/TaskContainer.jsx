import React from 'react'

export default function TaskContainer({title,description}) {
  return (
    <div>
      {title}
      {description}
      <button>Complete</button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}
