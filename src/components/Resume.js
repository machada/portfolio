import React from "react";
import {AppBar, Toolbar, Typography, IconButton, Button} from "@material-ui/core";
import ReactPlayer from "react-player";
import {Grid} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import resumeCopy from '../images/20201101AlMachadoResume.pdf'


const Resume = (props) =>{

    return(
        < a href={resumeCopy} download="AlMachadoResumeNov2020">
            hello world? resume 

        </a>
    )
}

export default Resume;