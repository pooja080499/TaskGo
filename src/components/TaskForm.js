// import React, { useState } from 'react';

// function TaskForm({ tasks, setTasks }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState('');
//   const [priority, setPriority] = useState('');

//   const handleAddTask = () => {
//     setTasks([...tasks, { title, description, date, priority, status: 'pending' }]);
//     setTitle('');
//     setDescription('');
//     setDate('');
//     setPriority('');
//   };

//   return (
//     <div className="task-form">
//       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
//       <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
//       <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//       <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//         <option value="">Priority</option>
//         <option value="high">High</option>
//         <option value="medium">Medium</option>
//         <option value="low">Low</option>
//       </select>
//       <button onClick={handleAddTask}>Add Task</button>
//     </div>
//   );
// }

// export default TaskForm;


import React, { useState } from 'react';
import '../styles/TaskForm.css'; // Make sure the CSS is applied for styling

function TaskForm({ tasks, setTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');

  const handleAddTask = () => {
    if (title && description && date && priority) {
      setTasks([...tasks, { title, description, date, priority, status: 'pending' }]);
      setTitle('');
      setDescription('');
      setDate('');
      setPriority('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="task-form-container">
      <div className="task-form">
        <h2>Add New Task</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="task-input"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="task-description"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="task-date"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="task-priority"
        >
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button onClick={handleAddTask} className="add-task-button">
          Add Task
        </button>
      </div>
    </div>
  );
}

export default TaskForm;

