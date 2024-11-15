// Header.js
import React, { useState } from 'react';
import profileImage from '../assets/profile.jpg';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import "../styles/Header.css";

function Header({ onSearch, onStatusFilterChange, onPriorityFilterChange, statusFilter, priorityFilter }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value); // Pass search query back to the parent
    }
  };

  return (
    <header className="header">
      <div className="left">
        {/* Use the imported image variable here */}
        <img src={profileImage} alt="Profile" className="profile" />
        <span>TaskGo</span>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="filters">
        {/* Filter Components */}
        <StatusFilter 
          statusFilter={statusFilter} 
          onStatusFilterChange={onStatusFilterChange} 
        />
        <PriorityFilter 
          priorityFilter={priorityFilter} 
          onPriorityFilterChange={onPriorityFilterChange} 
        />
      </div>
      {/* <div className="right">
        <span>About</span> | <span>Help</span>
      </div> */}
    </header>
  );
}

export default Header;
