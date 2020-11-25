import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles, useTheme} from '@material-ui/styles';
import {Typography, IconButton} from "@material-ui/core";


export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
    let clickedItem = (event.target.innerHTML).toUpperCase()
    console.log( clickedItem)
    props.selectPage(clickedItem)
  };

  const handleClose = () => {
    console.log("closing big menu")
    setAnchorEl(null);
  };

  const useStyles = makeStyles(theme=>({
    typographyStyles:{
        flex: 10
    }
  }));
  const classes = useStyles();


  return (
    <div>
      <IconButton color='inheret' edge='start' aria-label="menu">

      </IconButton>    

      <Button 
        color='inherit'
        onClick= {handleClick}
        label = "HOME"
        >
      HOME
      </Button>


      <Button 
        color='inherit'
        onClick= {handleClick}
        label = "PROJECTS"
        >
      Projects
      </Button>
    
      <Button 
      color='inherit'
      onClick= {handleClick}
      label = "PIZZA"
      >
      Pizza
      </Button>
      <Button 
      color='inherit'
      onClick= {handleClick}
      label = "CONTACT"
      >
      Contact
      </Button>
          </div>
        );
}