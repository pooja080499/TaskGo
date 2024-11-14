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

function TaskList({ tasks, setTasks }) {
  const [filter, setFilter] = useState('all');

  // Update the task status automatically if the task is overdue
  useEffect(() => {
    const updatedTasks = tasks.map(task => {
      const dueDate = new Date(task.date);
      const currentDate = new Date();
      if (task.status === 'pending' && dueDate < currentDate) {
        task.status = 'overdue'; // Update status to overdue if task is past the due date
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

  return (
    <div className="task-list">
      {/* <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
        <button onClick={() => setFilter('overdue')}>Overdue</button>
        <button onClick={() => setFilter('complete')}>Complete</button>
      </div> */}
      {filteredTasks.map((task, index) => (
        <div key={index} className={`task-item ${task.status}`}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.date}</p>
          <p>Status: <strong>{task.status.charAt(0).toUpperCase() + task.status.slice(1)}</strong></p>
          <button onClick={() => markTaskComplete(index)} disabled={task.status === 'complete'}>Mark as Complete</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

