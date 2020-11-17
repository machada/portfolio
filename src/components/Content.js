import React from 'react';
import ProjectCard from './Projectcard';
import {Grid, Typography} from "@material-ui/core";
import headPic from '../images/lnkdin.jpg';


import longbridge from '../images/longbridge.jpg'
import Paper from '@material-ui/core/Paper';

const styles = {
    paperContainer:{
        backgroundImage: `url${Image})`
    }
}

const Content = () =>{
    return(
        <Grid container spacing={2}>
            <Grid item sm={12} lg={12} style={styles.paperContainer}>
                
                <Typography variant="h2" align="center" color="secondary" style={styles.paperContainer}>
                    Projects

                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={styles.paperContainer}>
                <ProjectCard
                    title="Analysis Automation"
                    subtitle="VBA, File Manipulation, Binary Search Algorithm"
                    //imgSrc='./images/lnkdin.jpg'
                    avatarSrc={headPic}
                    body= "A program that takes in multiple csv files containing thousands of billing line items as input. Performs analysis on the files and allows end user to reallocate the costs. Original files are then updated by they program and processed by accounting"
                    //imgSrc="https://images.squarespace-cdn.com/content/v1/570eed8c859fd08d37bc28b5/1585680236662-ZAQ3ZBW3Y9CZO34DSMJO/ke17ZwdGBToddI8pDm48kE8izGavJr1KYhbfWurfjURZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyYMYx0w4hBCYVkSUDvCuPFG3dgUG4IQv-dmqUK1SarmwOLKOkYPfFu4fKmIf0_RsE/Hawaiian.jpg?format=500w"
                    //avatarSrc="https://images.squarespace-cdn.com/content/v1/570eed8c859fd08d37bc28b5/1585680236662-ZAQ3ZBW3Y9CZO34DSMJO/ke17ZwdGBToddI8pDm48kE8izGavJr1KYhbfWurfjURZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyYMYx0w4hBCYVkSUDvCuPFG3dgUG4IQv-dmqUK1SarmwOLKOkYPfFu4fKmIf0_RsE/Hawaiian.jpg?format=500w"

                />
            </Grid>
            <Grid item xs={12} sm={6} >
                <ProjectCard
                    title="Point of Sale Front-end - (WIP)"
                    subtitle="React, Material-UI, Javascript, HTML, CSS"
                    //imgSrc='./images/lnkdin.jpg'
                    avatarSrc={headPic}
                    body="A forms based point of sale system that allows users to customize items, add to cart and checkout."
                    //imgSrc="https://images.squarespace-cdn.com/content/v1/570eed8c859fd08d37bc28b5/1585680236662-ZAQ3ZBW3Y9CZO34DSMJO/ke17ZwdGBToddI8pDm48kE8izGavJr1KYhbfWurfjURZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyYMYx0w4hBCYVkSUDvCuPFG3dgUG4IQv-dmqUK1SarmwOLKOkYPfFu4fKmIf0_RsE/Hawaiian.jpg?format=500w"
                    //avatarSrc="https://images.squarespace-cdn.com/content/v1/570eed8c859fd08d37bc28b5/1585680236662-ZAQ3ZBW3Y9CZO34DSMJO/ke17ZwdGBToddI8pDm48kE8izGavJr1KYhbfWurfjURZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyYMYx0w4hBCYVkSUDvCuPFG3dgUG4IQv-dmqUK1SarmwOLKOkYPfFu4fKmIf0_RsE/Hawaiian.jpg?format=500w"

                />
            </Grid>
            <Grid item xs={12} sm={6} >
                <ProjectCard
                    title="Kegerator Project"
                    subtitle="Javascript, HTML, CSS, Flask Python, SQLAlchemy, Postgresql, Data Viz Chart.js"
                    //imgSrc='./images/lnkdin.jpg'
                    avatarSrc={headPic}
                    body="An application that utilizes a single board computer to collect temp/humidity/fluid flow data. The data is stored in a Postgresql database. Front-end interface that allows end user to analyze usage via tabular reports and dynamic charts."
                    //imgSrc="https://images.squarespace-cdn.com/content/v1/570eed8c859fd08d37bc28b5/1585680236662-ZAQ3ZBW3Y9CZO34DSMJO/ke17ZwdGBToddI8pDm48kE8izGavJr1KYhbfWurfjURZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyYMYx0w4hBCYVkSUDvCuPFG3dgUG4IQv-dmqUK1SarmwOLKOkYPfFu4fKmIf0_RsE/Hawaiian.jpg?format=500w"
                    //avatarSrc="https://images.squarespace-cdn.com/content/v1/570eed8c859fd08d37bc28b5/1585680236662-ZAQ3ZBW3Y9CZO34DSMJO/ke17ZwdGBToddI8pDm48kE8izGavJr1KYhbfWurfjURZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyYMYx0w4hBCYVkSUDvCuPFG3dgUG4IQv-dmqUK1SarmwOLKOkYPfFu4fKmIf0_RsE/Hawaiian.jpg?format=500w"

                />
            </Grid>
            <Grid item xs={12} sm={6} >
                <ProjectCard
                    title="Analysis Automation"
                    subtitle="VBA, File Manipulation, Binary Search Algorithm"
                    //imgSrc='./images/lnkdin.jpg'
                    avatarSrc={headPic}
                    //imgSrc="https://images.squarespace-cdn.com/content/v1/570eed8c859fd08d37bc28b5/1585680236662-ZAQ3ZBW3Y9CZO34DSMJO/ke17ZwdGBToddI8pDm48kE8izGavJr1KYhbfWurfjURZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyYMYx0w4hBCYVkSUDvCuPFG3dgUG4IQv-dmqUK1SarmwOLKOkYPfFu4fKmIf0_RsE/Hawaiian.jpg?format=500w"
                    //avatarSrc="https://images.squarespace-cdn.com/content/v1/570eed8c859fd08d37bc28b5/1585680236662-ZAQ3ZBW3Y9CZO34DSMJO/ke17ZwdGBToddI8pDm48kE8izGavJr1KYhbfWurfjURZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyYMYx0w4hBCYVkSUDvCuPFG3dgUG4IQv-dmqUK1SarmwOLKOkYPfFu4fKmIf0_RsE/Hawaiian.jpg?format=500w"

                />
            </Grid>

        </Grid>
        
    )
};

export default Content;