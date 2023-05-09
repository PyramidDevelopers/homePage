import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import './Dropdown.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
        <div >
            {!isOpen ? 
                <IconButton id="dropdown" onClick={toggleOpen}>
                    <SearchOutlined />
                </IconButton> 
                : 
                (
                    <div id="content" onClick={toggleOpen}>
                        <iframe src="https://maigrate.web.app/#/" width="400" height="500"></iframe>
                    </div>
                )
            }
        </div>
    );
};

export default Dropdown;
