// PriorityFilter.js
import React, { useState, useEffect } from 'react';

function PriorityFilter({ onPriorityFilterChange }) {
  const storedPriorityFilter = localStorage.getItem('priorityFilter') || 'all';
  const [priorityFilter, setPriorityFilter] = useState(storedPriorityFilter);

  useEffect(() => {
    localStorage.setItem('priorityFilter', priorityFilter);
    onPriorityFilterChange(priorityFilter);
  }, [priorityFilter, onPriorityFilterChange]);

  const handlePriorityChange = (event) => {
    setPriorityFilter(event.target.value);
  };

  return (
    <div>
      <label>Filter by Priority:</label>
      <select onChange={handlePriorityChange} value={priorityFilter}>
        <option value="all">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
}

export default PriorityFilter;
