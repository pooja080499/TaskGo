// import React, { useState } from 'react';
// import Header from '../components/Header';
// import TaskForm from '../components/TaskForm';
// import TaskList from '../components/TaskList';
// import TaskChart from '../components/TaskChart';
// import '../styles/DashboardPage.css';
// import '../styles/TaskForm.css';
// import '../styles/TaskList.css';

// function DashboardPage() {
//   const [tasks, setTasks] = useState([]);

//   return (
//     <div className="dashboard">
//       <Header />
//       <div className="dashboard-content">
//         <TaskForm tasks={tasks} setTasks={setTasks} />
//         <TaskChart tasks={tasks} />
//         <TaskList tasks={tasks} setTasks={setTasks} />
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;


// import React, { useState } from 'react';
// import Header from '../components/Header';
// import TaskForm from '../components/TaskForm';
// import TaskList from '../components/TaskList';
// import TaskChart from '../components/TaskChart';
// import '../styles/DashboardPage.css';
// import '../styles/TaskForm.css';
// import '../styles/TaskList.css';

// function DashboardPage() {
//   const [tasks, setTasks] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Filter tasks based on the search query
//   const filteredTasks = tasks.filter(
//     (task) =>
//       task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       task.description.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <div className="dashboard">
//       <Header />
//       <div className="dashboard-content">
//         {/* Search Bar */}
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search tasks..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//         </div>

//         {/* TaskForm for adding new tasks */}
//         <TaskForm tasks={tasks} setTasks={setTasks} />

//         {/* TaskChart to display task completion statistics */}
//         <TaskChart tasks={tasks} />

//         {/* TaskList to display filtered tasks */}
//         <TaskList tasks={filteredTasks} setTasks={setTasks} />
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;


// import React, { useState } from 'react';
// import Header from '../components/Header';
// import TaskForm from '../components/TaskForm';
// import TaskList from '../components/TaskList';
// import TaskChart from '../components/TaskChart';
// import '../styles/DashboardPage.css';
// import '../styles/TaskForm.css';
// import '../styles/TaskList.css';

// function DashboardPage() {
//   const [tasks, setTasks] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Filter tasks based on the search query
//   const filteredTasks = tasks.filter(
//     (task) =>
//       task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       task.description.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle search input change from Header
//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   return (
//     <div className="dashboard">
//       <Header onSearch={handleSearch} />
//       <div className="dashboard-content">
//         <TaskForm tasks={tasks} setTasks={setTasks} />
//         <TaskChart tasks={tasks} />
//         <TaskList tasks={filteredTasks} setTasks={setTasks} />
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;


// import React, { useState } from 'react';
// import Header from '../components/Header';
// import TaskForm from '../components/TaskForm';
// import TaskList from '../components/TaskList';
// import TaskChart from '../components/TaskChart';
// import '../styles/DashboardPage.css';
// import '../styles/TaskForm.css';
// import '../styles/TaskList.css';

// function DashboardPage() {
//   const [tasks, setTasks] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isFormVisible, setIsFormVisible] = useState(false); // New state to toggle the form visibility

//   // Filter tasks based on the search query
//   const filteredTasks = tasks.filter(
//     (task) =>
//       task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       task.description.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle search input change from Header
//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   // Toggle task form visibility
//   const toggleTaskForm = () => {
//     setIsFormVisible(!isFormVisible);
//   };

//   return (
//     <div className="dashboard">
//       <Header onSearch={handleSearch} />
//       <div className="dashboard-content">
//         <div className="left-section">
//           <button className="add-task-button" onClick={toggleTaskForm}>
//             Add New Task
//           </button>
//           {isFormVisible && <TaskForm tasks={tasks} setTasks={setTasks} />}
//         </div>
//         <TaskChart tasks={tasks} />
//         <TaskList tasks={filteredTasks} setTasks={setTasks} />
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;


// import React, { useState } from 'react';
// import Header from '../components/Header';
// import TaskForm from '../components/TaskForm';
// import TaskList from '../components/TaskList';
// import TaskChart from '../components/TaskChart';
// import '../styles/DashboardPage.css';
// import '../styles/TaskForm.css';
// import '../styles/TaskList.css';

// function DashboardPage() {
//   const [tasks, setTasks] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility
//   const [filter, setFilter] = useState('all'); // State to handle the filter functionality

//   // Filter tasks based on the search query
//   const filteredTasks = tasks.filter(
//     (task) =>
//       (task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         task.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
//       (filter === 'all' || task.status === filter)
//   );

//   // Handle search input change from Header
//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   // Toggle task form visibility
//   const toggleTaskForm = () => {
//     setIsFormVisible(!isFormVisible);
//   };

//   // Handle filter change
//   const handleFilterChange = (status) => {
//     setFilter(status);
//   };

//   // Count total tasks and tasks based on their status
//   const totalTasks = tasks.length;
//   const pendingTasks = tasks.filter(task => task.status === 'pending').length;
//   const overdueTasks = tasks.filter(task => task.status === 'overdue').length;
//   const completedTasks = tasks.filter(task => task.status === 'complete').length;

//   return (
//     <div className="dashboard">
//       <Header onSearch={handleSearch} />
//       <div className="dashboard-content">
//         {/* Left Section */}
//         <div className="left-section">
//           <button className="add-task-button" onClick={toggleTaskForm}>
//             Add New Task
//           </button>
//           {isFormVisible && <TaskForm tasks={tasks} setTasks={setTasks} />}
//           <div className="filters">
//             <button onClick={() => handleFilterChange('all')}>All</button>
//             <button onClick={() => handleFilterChange('pending')}>Pending</button>
//             <button onClick={() => handleFilterChange('overdue')}>Overdue</button>
//             <button onClick={() => handleFilterChange('complete')}>Complete</button>
//           </div>
//         </div>

//         {/* Middle Section */}
//         <div className="middle-section">
//           <div className="task-summary">
//             <div>Total Tasks: {totalTasks}</div>
//             <div>Pending: {pendingTasks}</div>
//             <div>Overdue: {overdueTasks}</div>
//             <div>Completed: {completedTasks}</div>
//           </div>
//           <TaskList tasks={filteredTasks} setTasks={setTasks} />
//         </div>

//         {/* Right Section */}
//         <div className="right-section">
//           <TaskChart tasks={tasks} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;

import React, { useState } from 'react';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskChart from '../components/TaskChart';
import '../styles/DashboardPage.css';

function DashboardPage({ tasks, setTasks }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  // Filter tasks based on search query, status, and priority
  const filteredTasks = tasks.filter(
    (task) =>
      (task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (statusFilter === 'all' || task.status === statusFilter) &&
      (priorityFilter === 'all' || task.priority === priorityFilter)
  );

  // Handle search input change from Header
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Handle filter changes
  const handleStatusFilterChange = (status) => {
    setStatusFilter(status);
  };

  const handlePriorityFilterChange = (priority) => {
    setPriorityFilter(priority);
  };

  // Count total tasks and tasks based on their status
  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;
  const overdueTasks = tasks.filter(task => task.status === 'overdue').length;
  const completedTasks = tasks.filter(task => task.status === 'complete').length;

  return (
    <div className="dashboard">
      <Header onSearch={handleSearch} />
      <div className="dashboard-content">
        {/* Left Section */}
        <div className="left-section">
          <TaskForm tasks={tasks} setTasks={setTasks} />
          <div className="filters">
            <div>
              <label>Filter by Status:</label>
              <select onChange={(e) => handleStatusFilterChange(e.target.value)} value={statusFilter}>
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
                <option value="complete">Complete</option>
              </select>
            </div>
            <div>
              <label>Filter by Priority:</label>
              <select onChange={(e) => handlePriorityFilterChange(e.target.value)} value={priorityFilter}>
                <option value="all">All</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="middle-section">
          <div className="task-summary">
            <div>Total Tasks: {totalTasks}</div>
            <div>Pending: {pendingTasks}</div>
            <div>Overdue: {overdueTasks}</div>
            <div>Completed: {completedTasks}</div>
          </div>
          <TaskList tasks={filteredTasks} setTasks={setTasks} />
        </div>

        {/* Right Section */}
        <div className="right-section">
          <TaskChart tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;






