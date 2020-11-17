import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useTheme from '@material-ui/styles';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    
    //let clickedItem = (event.target.innerHTML).toUpperCase()
    let clickedItem = (event.target.dataset.parent)
    console.log( clickedItem)
    props.selectPage(clickedItem)
    setAnchorEl(null);
  };

  return (
  
    <div>
      <Button aria-controls="simple-menu" color="inherit" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem 
          onClick={handleClose}
          data-parent="HOME"
          >HOME
        </MenuItem>
        <MenuItem 
          onClick={handleClose}
          data-parent="PROJECTS"
          >PROJECTS
        </MenuItem>
        <MenuItem 
          onClick={handleClose}
          data-parent="RESUME"
          >RESUME
        </MenuItem>
        <MenuItem 
          onClick={handleClose}
          data-parent="PIZZA"
          >PIZZA
        </MenuItem>
        <MenuItem 
          onClick={handleClose}
          data-parent="CONTACT"
          >CONTACT
        </MenuItem>
      </Menu>
    </div>
  );
}