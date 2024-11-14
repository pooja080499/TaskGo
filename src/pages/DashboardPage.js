// DashboardPage.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskChart from '../components/TaskChart';
import '../styles/DashboardPage.css';

function DashboardPage() {
  // Load tasks from localStorage (initial state)
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(storedTasks); // tasks state
  const [searchQuery, setSearchQuery] = useState(''); // search query for tasks
  const [statusFilter, setStatusFilter] = useState(localStorage.getItem('statusFilter') || 'all'); // status filter
  const [priorityFilter, setPriorityFilter] = useState(localStorage.getItem('priorityFilter') || 'all'); // priority filter

  // Sync tasks and filters with localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks to localStorage
  }, [tasks]);

  // Filter tasks based on search query, status, and priority
  const filteredTasks = tasks.filter(
    (task) =>
      (task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (statusFilter === 'all' || task.status === statusFilter) &&
      (priorityFilter === 'all' || task.priority === priorityFilter)
  );

  // Handle search input change
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Count tasks based on their status
  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((task) => task.status === 'pending').length;
  const overdueTasks = tasks.filter((task) => task.status === 'overdue').length;
  const completedTasks = tasks.filter((task) => task.status === 'complete').length;

  return (
    <div className="dashboard">
      <Header
        onSearch={handleSearch}
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        onStatusFilterChange={setStatusFilter}
        onPriorityFilterChange={setPriorityFilter}
      />
      <div className="dashboard-content">
        {/* Left Section */}
        <div className="left-section">
          <TaskForm tasks={tasks} setTasks={setTasks} />
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
