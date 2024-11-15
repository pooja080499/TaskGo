// StatusFilter.js
import React, { useState, useEffect } from 'react';

function StatusFilter({ onStatusFilterChange }) {
  const storedStatusFilter = localStorage.getItem('statusFilter') || 'all';
  const [statusFilter, setStatusFilter] = useState(storedStatusFilter);

  useEffect(() => {
    localStorage.setItem('statusFilter', statusFilter);
    onStatusFilterChange(statusFilter); // Propagate the change to parent
  }, [statusFilter, onStatusFilterChange]);

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
  };

  return (
    <div>
      <label>Filter by Status:</label>
      <select onChange={handleStatusChange} value={statusFilter}>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="overdue">Overdue</option>
        <option value="complete">Complete</option>
      </select>
    </div>
  );
}

export default StatusFilter;