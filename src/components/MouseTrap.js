import React from "react";
import {AppBar, Toolbar, Typography, IconButton, Button} from "@material-ui/core";
import ReactPlayer from "react-player";
import {Grid} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';



import App from "../App";


const MouseTrap = (props) =>{
    return(
        


        <Grid item sm={12} md={7}className="video-player">
        <Typography variant="h5" borderBottom={150}>
            "2014 - Python Open CV Arduino Motion Activated Mouse Trap"
        </Typography>
        <Typography className="video-caption">
            "A fun endeavor that used a laptop with a webcam to detect motion using Python's OpenCV library. 
            When motion was detected, it would actuate an electric motor that deployed a spring-loaded trap. 
            "
        </Typography>
        <Container borderBottom={10}></Container>
        
        <ReactPlayer
            style={{zIndex:60}}
           
            controls="true"
            playing="false"
            
            url="https://youtu.be/NQ5MPWFY-LI?t=70"

            />
            </Grid>

    )
};

export default MouseTrap