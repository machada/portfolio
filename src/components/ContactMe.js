import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import headPic from '../images/lnkdin.jpg';
import emailpic from '../images/emailpic.png';
import phonepic from '../images/phonepic.png';
import linkedinpic from '../images/linkedinpic.png';
import youtubepic from '../images/youtubepic.png';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ContactMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button >
        <ListItemLink href="mailto:allan.machado2011@gmail.com">
          <img src={emailpic}/>
          <ListItemText className="contact-list-item" primary="allan.machado2011@gmail.com" />
          </ListItemLink>
        </ListItem >

        <ListItem  href="978-590-0298">
          <img src={phonepic}/>
          <ListItemText className="contact-list-item" primary="978-590-0298" />
        </ListItem >

        <ListItem button >
            <ListItemLink href="http://www.linkedin.com/in/allan-machado-lowell">
                <img src={linkedinpic}/>
            </ListItemLink>
        </ListItem >

        <ListItem button >
        <ListItemLink href="https://www.youtube.com/user/allanmachado2011">
          <img src={youtubepic}/>
          </ListItemLink>
        
        </ListItem >





       
      </List>
    </div>
  );
}
