import React, { useState, useEffect } from 'react';
import CloseOutlined from '@material-ui/icons/CloseOutlined';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import './Dropdown.css';
import { IconButton } from '@material-ui/core';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
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
  const iconClass = isMobile ? 'icon-large' : '';

  return (
    <div>
      <IconButton
        id="m-search-btn"
        className={isOpen ? 'm-active' : ''}
        onClick={toggleOpen}
      >
        {isOpen ? (
          <CloseOutlined className={iconClass} />
        ) : (
          <SearchOutlined className={iconClass} />
        )}
      </IconButton>
      <div id="m-popup" className={isOpen ? 'm-show' : ''}>
        <iframe
          src="https://dev.d3nbl0ydl3osud.amplifyapp.com/?webbot_id=31"
          width={isMobile ? "320" : "400"}
          height={isMobile ? "600" : "700"}
          frameBorder="0"
          style={{ display: isOpen ? 'block' : 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

export default Dropdown;
