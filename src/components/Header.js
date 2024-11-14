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
        <img src='lets-manage-task/src/assets/profile.jpg' alt="Profile" className="profile" /> TaskFlow
      </div>
      <div className="center">
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

