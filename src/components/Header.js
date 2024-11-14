// import React from 'react';

// function Header() {
//   return (
//     <header className="header">
//       <div className="left">
//         <img src="../assets/profile.jpg" alt="Profile" className="profile" /> TaskFlow
//       </div>
//       <div className="center">
//         <input type="text" placeholder="Search tasks..." />
//       </div>
//       <div className="right">
//         <span>About</span> | <span>Help</span>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React, { useState } from 'react';
// Import the profile image from the assets folder
import profileImage from '../assets/profile.jpg';
import "../styles/Header.css";

function Header({ onSearch }) {
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
        <img src={profileImage} alt="Profile" className="profile"  /> TaskFlow
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="right">
        <span>About</span> | <span>Help</span>
      </div>
    </header>
  );
}

export default Header;

