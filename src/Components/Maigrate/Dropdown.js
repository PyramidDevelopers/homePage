import React, { useState, useEffect } from 'react';
import CloseOutlined from '@material-ui/icons/CloseOutlined';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import './Dropdown.css';
import { IconButton } from '@material-ui/core';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if Cmd (Mac) or Ctrl (Windows) key is pressed along with the 'K' key
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <IconButton
        id="m-search-btn"
        className={isOpen ? 'm-active' : ''}
        onClick={toggleOpen}
      >
        {isOpen ? <CloseOutlined /> : <SearchOutlined />}
      </IconButton>
      <div
        id="m-popup"
        className={isOpen ? 'm-show' : ''}
      >
        {isOpen && (
          <iframe
            src="https://dev.d3nbl0ydl3osud.amplifyapp.com/?webbot_id=11"
            width="400"
            height="500"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
