import React from "react";
import {AppBar, Toolbar, Typography, IconButton, Button} from "@material-ui/core";
import ReactPlayer from "react-player";
import {Grid} from "@material-ui/core";

import App from "../App";


const MouseTrap = (props) =>{
    return(
        


        <Grid item sm={12}>
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