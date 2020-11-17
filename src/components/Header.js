import React from "react";
import {AppBar, Toolbar, Typography, IconButton, Button} from "@material-ui/core";
import HomeIcon from "@material-ui/core/Icon";
import AcUnitRounded from '@material-ui/icons/AcUnitRounded'
import App from "../App";
import {makeStyles, useTheme} from "@material-ui/styles"
import SmallNav from './SmallNav'
import BigNav from './BigNav'
//import useTheme from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import longbridge from '../images/longbridge.jpg'
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme=>({
    typographyStyles:{
        flex: 10
    }
}));

const styles = {
    paperContainer: {
        backgroundImage: `url(${longbridge})`,
        width: "5%"
    }
};


const renderNav = (isSmall, props)=>{
    if (isSmall == true){
        return <SmallNav
                selectPage = {props.selectPage}
                />
    }else{
        
        return  <BigNav
                    selectPage={props.selectPage}
                    
                />
    }
   
};

const Header = (props) =>{
    const classes = useStyles();
    const theme = useTheme();
    //const matches = useMediaQuery(theme.breakpoints.up("sm"));
    const matches = useMediaQuery("(max-width: 600px)");
    return(
        <AppBar position = "static"  > 
            
            <Toolbar >
                
                <IconButton color='inheret' edge='start' aria-label="menu">

                    </IconButton>    
                
                <Typography noWrap = "true" variant="h5" xs={12} sm={10} className={classes.typographyStyles}>
                    Al Machado

                </Typography>
                {renderNav(matches, props)}
          
               
            </Toolbar>

        </AppBar>
    
)};

export default Header;