// TaskList.js
import React, { useState, useEffect } from 'react';
import "../styles/TaskList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

function TaskList({ tasks, setTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState({ title: '', description: '', date: '', priority: '', status: '' });

  // Run overdue check once on mount
  useEffect(() => {
    const updatedTasks = tasks.map(task => {
      const dueDate = new Date(task.date);
      const currentDate = new Date();

      // Mark as overdue if the task is pending and past due
      if (task.status === 'pending' && dueDate < currentDate) {
        task.status = 'overdue';
      }
      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Persist updated tasks
  }, []);

  const markTaskComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = 'complete';
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Persist in localStorage
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
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
                <input
                  type="text"
                  name="title"
                  value={editTask.title}
                  onChange={handleEditChange}
                  placeholder="Title"
                  required
                />
                <textarea
                  name="description"
                  value={editTask.description}
                  onChange={handleEditChange}
                  placeholder="Description"
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
                <div className="edit-form-buttons">
                  <button type="submit">Save Changes</button>
                  <button type="button" onClick={handleCancelEdit}>Cancel</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="task-item-content">
              <div className="task-details">
                <h3>Title: {task.title}</h3>
                <p>Description: {task.description}</p>
                <p>Due: {task.date}</p>
                <p>Status: <strong>{task.status.charAt(0).toUpperCase() + task.status.slice(1)}</strong></p>
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
