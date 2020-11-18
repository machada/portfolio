import React, { Component } from 'react'
import {Typography} from "@material-ui/core";
import {createMuiTheme, responsiveFontSizes,MuiThemeProvider} from "@material-ui/core";
import longbridge from '../images/longbridge.jpg'
import Paper from '@material-ui/core/Paper';
import MouseTrap from "./MouseTrap";
import ReactPlayer from "react-player";


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const line1 = "Hello, my name is"
const line2 = "Al Machado"
const line3 = "I'm a full stack webdev."
const styles = {
  paperContainer: {
      backgroundImage: `url(${longbridge})`,
      width: "5%"
  }
};

export default class LandingPage extends Component {
    render() {
       
        return (
            <MuiThemeProvider >
              
            <Typography variant="h4" gutterBottom gutterTop>
            {line1}
          </Typography>
          <Typography variant="h3" color="secondary" fontWeight="900" gutterBottom>
            {line2}
          </Typography>
          <Typography variant="h5" color="black" gutterBottom>
            {line3}
          </Typography>
          <MouseTrap
            controls="true"
            playing="true"
            url="https://youtu.be/p29JUpsOSTE"></MouseTrap>
          
          </MuiThemeProvider>
        )
    }
}
