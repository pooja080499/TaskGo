// import React, { useState } from 'react';

// function TaskList({ tasks, setTasks }) {
//   const [filter, setFilter] = useState('all');

//   const filteredTasks = tasks.filter(task => {
//     if (filter === 'all') return true;
//     return task.status === filter;
//   });

//   const markTaskComplete = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].status = 'complete';
//     setTasks(updatedTasks);
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="task-list">
//       <div className="filters">
//         <button onClick={() => setFilter('all')}>All</button>
//         <button onClick={() => setFilter('pending')}>Pending</button>
//         <button onClick={() => setFilter('overdue')}>Overdue</button>
//         <button onClick={() => setFilter('complete')}>Complete</button>
//       </div>
//       {filteredTasks.map((task, index) => (
//         <div key={index} className={`task-item ${task.status}`}>
//           <h3>{task.title}</h3>
//           <p>{task.description}</p>
//           <p>Due: {task.date}</p>
//           <button onClick={() => markTaskComplete(index)} disabled={task.status === 'complete'}>Mark as Complete</button>
//           <button onClick={() => deleteTask(index)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default TaskList;


import React, { useState, useEffect } from 'react';
import "../styles/TaskList.css";

function TaskList({ tasks, setTasks }) {
  const [filter, setFilter] = useState('all');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState({ title: '', description: '', date: '', priority: '', status: '' });

  // Update the task status automatically if the task is overdue
  useEffect(() => {
    const updatedTasks = tasks.map(task => {
      const dueDate = new Date(task.date);
      const currentDate = new Date();
      if (task.status === 'pending' && dueDate < currentDate) {
        task.status = 'overdue';
      }
      return task;
    });
    setTasks(updatedTasks);
  }, [tasks, setTasks]);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  const markTaskComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = 'complete';
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditClick = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setEditTask(tasks[index]); // Load the task details into the edit form
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTask(prev => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = { ...editTask };
    setTasks(updatedTasks);
    setIsEditing(false);
    setEditIndex(null);
  };

  return (
    <div className="task-list">
      {filteredTasks.map((task, index) => (
        <div key={index} className={`task-item ${task.status}`}>
          {/* If the item is in edit mode, show the edit form */}
          {isEditing && editIndex === index ? (
            <form className="edit-form" onSubmit={handleEditSubmit}>
              <h3>Edit Task</h3>
              
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={editTask.title}
                onChange={handleEditChange}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={editTask.description}
                onChange={handleEditChange}
                required
              />
              <input
                type="date"
                name="date"
                value={editTask.date}
                onChange={handleEditChange}
                required
              />
              <select
                name="priority"
                value={editTask.priority}
                onChange={handleEditChange}
                required
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <select
                name="status"
                value={editTask.status}
                onChange={handleEditChange}
                required
              >
                <option value="pending">Pending</option>
                <option value="complete">Complete</option>
                <option value="overdue">Overdue</option>
              </select>
              <button type="submit">Save Changes</button>
              <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
          ) : (
            // Display the task item normally when not editing
            <>
              <div class="item-content">
                <h3>  Title: {task.title}</h3>
                <p>   Description:{task.description}</p>
                <p>   Due: {task.date}</p>
                <p>   Status:  <strong>{task.status.charAt(0).toUpperCase() + task.status.slice(1)}</strong></p>
              </div>
              <div className="btn">
                <button onClick={() => markTaskComplete(index)} disabled={task.status === 'complete'}>
                  Mark as Complete
                </button>
                <button onClick={() => handleEditClick(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;


