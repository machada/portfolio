import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader'
import {Avatar} from "@material-ui/core"
import ShareIcon from "@material-ui/icons/Share"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import {createMuiTheme, responsiveFontSizes,MuiThemeProvider} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const line1 = "Hello, my name is"
const line2 = "Al Machado"
const line3 = "I'm a full stack webdev."
const useStyles = makeStyles({
    root: {
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const ProjectCard = (props) =>{

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const {avatarSrc, title, subtitle, description, imgSrc, body}= props
    
    return(
        
        <MuiThemeProvider theme={theme}>
        <Card className={classes.root}>
            
            <CardHeader
            avatar={
                <Avatar src={avatarSrc} className={classes.large}/>
              
                }
                action={
                    <IconButton aria-label="settings">
                    <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
                />
            <CardMedia
                style={{height:"150"}}
                className={classes.media}
                image={avatarSrc}
                title="helloooooooooooooooooooooh"
            />
        <CardContent>

          <Typography variant="body2" component="p">
            {body}
            <br />
           
          </Typography>

        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      </MuiThemeProvider>
    );
}
export default ProjectCard;