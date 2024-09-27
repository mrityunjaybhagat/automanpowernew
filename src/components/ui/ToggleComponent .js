import React, { useState } from 'react';

const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible); // Toggle the visibility
  };

  return (
    <div>
      <button className="btn me-2  p-2 px-2" onClick={handleToggle}>
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>
      {isVisible && (
        <div className="toggle-content">
          <p>This is the content to toggle.</p>
        </div>
      )}
    </div>
  );
};

export default ToggleComponent;
