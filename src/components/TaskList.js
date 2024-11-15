import React, { useState, useEffect } from 'react';
import "../styles/TaskList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

function TaskList({ tasks, setTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState({ title: '', description: '', date: '', priority: '', status: '' });

  // Check and update overdue tasks whenever tasks are updated
  useEffect(() => {
    const updatedTasks = tasks.map(task => {
      const dueDate = new Date(task.date);
      const currentDate = new Date();

      // Mark as overdue if the task is pending and past due
      if (task.status === 'pending' && dueDate < currentDate) {
        return { ...task, status: 'overdue' };
      }
      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Persist updated tasks
  }, [tasks, setTasks]);

  const markTaskComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = 'complete';
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Persist in localStorage
  };

  const deleteTask = (index) => {
    console.log('Deleting task at index:', index);
    const updatedTasks = tasks.filter((_, i) => i !== index);
    console.log('Tasks after deletion:', updatedTasks);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Persist in localStorage
  };

  const handleEditClick = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setEditTask({ ...tasks[index] });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTask(prev => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(editTask);  // Log the updated task to verify
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = { ...editTask };
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Persist in localStorage
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditIndex(null);
  };

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className={`task-item ${task.status}`}>
          {isEditing && editIndex === index ? (
            <div className="edit-form-container">
              <form className="edit-form" onSubmit={handleEditSubmit}>
                <div className='label-style'>
                  <label>Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={editTask.title}
                    onChange={handleEditChange}
                    placeholder="Title"
                    required
                  />
                </div>
                <div className='label-style'>
                  <label>Description:</label>
                  <textarea
                    name="description"
                    value={editTask.description}
                    onChange={handleEditChange}
                    placeholder="Description"
                    required
                  />
                </div>
                <div className='label-style'>
                  <label>Due Date:</label>
                  <input
                    type="date"
                    name="date"
                    value={editTask.date}
                    onChange={handleEditChange}
                    required
                  />
                </div>
                <div className='label-style'>
                  <label>Priority:</label>
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
                </div>
                <div className='label-style'>
                  <label>Status:</label>
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
                </div>
                <div className="edit-form-buttons">
                  <button type="submit">Save Changes</button>
                  <button type="button" onClick={handleCancelEdit}>Cancel</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="task-item-content">
              <div className="task-details">
                <div className="task-row">
                  <span className="task-label">Title:</span>
                  <span className="task-data">{task.title}</span>
                </div>
                <div className="task-row">
                  <span className="task-label">Description:</span>
                  <span className="task-data">{task.description}</span>
                </div>
                <div className="task-row">
                  <span className="task-label">Due:</span>
                  <span className="task-data">{task.date}</span>
                </div>
                <div className="task-row">
                  <span className="task-label">Priority:</span>
                  <span className="task-data">{task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</span>
                </div>
                <div className="task-row">
                  <span className="task-label">Status:</span>
                  <span className="task-data">{task.status.charAt(0).toUpperCase() + task.status.slice(1)}</span>
                </div>
              </div>
              <div className="task-actions">
                <button onClick={() => markTaskComplete(index)} disabled={task.status === 'complete'}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </button>
                <button onClick={() => handleEditClick(index)} disabled={task.status === 'complete'}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button onClick={() => deleteTask(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
