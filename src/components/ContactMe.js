import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import headPic from '../images/linkedinellipse1.png';
import emailpic from '../images/emailpic.png';
import phonepic from '../images/phonepic.png';
import linkedinpic from '../images/linkedinpic.png';
import youtubepic from '../images/youtubepic.png';
import cvDownload from '../images/cvDownload.png';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import resumeCopy from '../images/20201101AlMachadoResume.pdf'




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    paddingLeft: '16px',
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ContactMe() {
  const classes = useStyles();
  let [displayNum, setDisplay] = useState(false)

 function handleClick() {
    setDisplay(displayNum = !displayNum)
  }

  function renderNum(){
    if (displayNum == true){
      return (<div >978-590-0298</div>)
    }
  }
  return (
    <div className={classes.root}>

      <img src={headPic}/>
      <Box className="landing-container" borderTop={1}>
      </Box>

      <List component="nav" aria-label="main mailbox folders">


        <Box>
        <Button href="mailto:allan.machado2011@gmail.com">
          <img src={emailpic}/>
        </Button>

        <Tooltip title="978-590-0298" >
        <Button href="tel:9785900298" onClick={handleClick}>
          <img src={phonepic} />
        </Button>
        </Tooltip>
        <Button href="http://www.linkedin.com/in/allan-machado-lowell" target="blank">
          <img src={linkedinpic}/>
        </Button>

        
        </Box>
        <Box className="center-contents">
        <Button href="https://www.youtube.com/user/allanmachado2011" target="blank">
         <img src={youtubepic}/>
        </Button>
        <Button a href={resumeCopy} download="AlMachadoResumeNov2020">
         <img src={cvDownload}/>
        </Button>
    
        </Box>
        {renderNum()}   

      </List>
    </div>
  );
}
