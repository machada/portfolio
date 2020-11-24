import React, { Component } from 'react'
import {Typography} from "@material-ui/core";
import {createMuiTheme, responsiveFontSizes,MuiThemeProvider} from "@material-ui/core";
import longbridge from '../images/longbridge.jpg'
import Paper from '@material-ui/core/Paper';
import MouseTrap from "./MouseTrap";
import ReactPlayer from "react-player";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';



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


  handleClick = (route) =>{
    console.log("handling click");
    console.log(this.props.selectPage(route));
  };



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

          <Box className="landing-container" borderTop={1}>
          </Box>
          <Typography variant ="h6" noWrap gutterBottom >
            Check out some of my: <Button variant="contained" style={{fontWeight:'600'}} color="secondary" onClick={()=>{this.handleClick("PROJECTS")}}>projects</Button>
          
          </Typography>
          <Typography variant ="h6" noWrap>
            Hope to hear from you: <Button variant="contained" style={{fontWeight:'600'}} color="secondary" onClick={()=>{this.handleClick("CONTACT")}}>contact me</Button>
          
          </Typography>
          
          {/*<MouseTrap
            controls="true"
            playing="true"
          url="https://youtu.be/p29JUpsOSTE"></MouseTrap> */}
          
          </MuiThemeProvider>
        )
    }
}
