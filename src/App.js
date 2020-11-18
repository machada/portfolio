
import './App.css';
import React, {Component} from "react";
import {Grid} from '@material-ui/core'
import Header from "./components/Header";
import Content from './components/Content';
import ProjectCard from './components/Projectcard';
import PageRouting from './components/PageRouting';
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import yellow from "@material-ui/core/colors/yellow";
import longbridge from './images/lnkdin.jpg';
import Paper from '@material-ui/core/Paper';
import headPic from './images/lnkdin.jpg';
import ReactPlayer from "react-player";

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#546e7a"
    },
    secondary: {
      main: "#424242"
    } ,
    background: {
      default: "#546e7a"
    } 

    }
  }

)

const styles = {
  paperContainer: {
      backgroundImage: `url(${longbridge})`
  }
};

export class  App extends Component {
  state ={
    currentPage: "HOME"
  }

selectPage = (selection) => {
  console.log("the page selected was ",selection)
  this.setState({currentPage:selection})
  console.log(this.state.currentPage)
}

  render(){
    return(

    <ThemeProvider theme={theme} className="Nav-Header">
 
      
    <Grid container direction="column" >
      <Grid item >
        <Header
          selectPage = {this.selectPage}
          
        />
        


      </Grid>

      <Grid item container container justify="center" className="Nav-Header" >
      
        <Grid item xs={10} sm={8} className="Landing-Page">
          <PageRouting
            selectedPage= {this.state.currentPage}
          />
    


        </Grid>
        
          </Grid>
        </Grid>

    
    </ThemeProvider>
    )
  };
    
}

export default App;
