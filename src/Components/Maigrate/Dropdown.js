import React, { useState, useEffect } from 'react';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';
import './Dropdown.css';
import { IconButton } from '@mui/material';
import { set } from 'lodash';

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
    // Handler to receive messages from the iframe
    const handleMessage = (event) => {
      // Always check the origin here and ensure it matches what you expect.
      if (event.origin !== 'https://app.maigrate.com') return;
      if (event.data.type === 'MODAL_OPENED') {
        setIsOpen(true);
      } else if (event.data.type === 'MODAL_CLOSED') {
        setIsOpen(false);
      }
    };

    window.addEventListener('message', handleMessage);

    // Cleanup listener when component unmounts
    return () => {
      window.removeEventListener('message', handleMessage);
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


  return (
    <div>
    <iframe
      title="Maigrate Chatbot"
      src="http://localhost:3000/CustomChat/169/0"
      sandbox="allow-same-origin allow-scripts"
      style={{
        color: 'var(--general-color) !important',
        border: 'none',
        position: 'fixed',
        width: isOpen ? isMobile ? "100%" : '450px' : null,
        height: isOpen ? window.innerHeight - 50 : null,
        bottom: 0,
        right:  0,
        zIndex: 999999
      }}
    ></iframe>
</div>
  );
    {/* <div>
      <IconButton
        id="m-search-btn"
        className={isOpen ? 'm-active' : ''}
        onClick={toggleOpen}
      >
        {isOpen ? (
          <CloseOutlined className='icon-custom' />
        ) : (
          <ChatBubbleOutline className='icon-custom' />
        )}
      </IconButton>
      <div id="m-popup" className={isOpen ? 'm-show' : ''}>
        <iframe
          src="https://prod.d3nbl0ydl3osud.amplifyapp.com/?webbot_id=31"
          width={isMobile ? "320" : "400"}
          height={isMobile ? "600" : "700"}
          frameBorder="0"
          style={{ display: isOpen ? 'block' : 'none' }}
        ></iframe>
      </div>
    </div> */}
    

      
    };

export default Dropdown;
