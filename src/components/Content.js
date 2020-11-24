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

function Content(props) {
    return (


        
        <Grid container spacing={2}>
            

            <Grid item sm={12} lg={12} style={styles.paperContainer}>
            
                <Typography variant="h2" align="center" color="secondary">
                    Projects

                </Typography>
            

            </Grid>
            

            <Grid item xs={12} sm={6}>
                <ProjectCard
                    title="Computer Vision Mouse Trap 2014"
                    subtitle="Python Open CV, Arduino"
                    //imgSrc='./images/lnkdin.jpg'
                    avatarSrc={headPic}
                    body="A Python script would use Open CV to detect if there was motion in the camera view. If motion was detected, then an electronic actuator would be energized which would deploy a spring-loaded trap. Eventually had to switch to a PIR motion detector because processing speed was too weak on my laptop." 
                    clickLabel="Play Video"
                    selectPage={props.selectPage}
                    route="MOUSE"
                    />
                    
            </Grid>
            <Grid item xs={12} sm={6}>
                <ProjectCard
                    title="Analysis Automation"
                    subtitle="VBA, File Manipulation, Binary Search Algorithm"
                    //imgSrc='./images/lnkdin.jpg'
                    avatarSrc={headPic}
                    body="A program that takes in multiple csv files containing thousands of billing line items as input. Performs analysis on the files and allows end user to reallocate the costs. Original files are then updated by they program and processed by accounting" 
                    clickLabel="Learn More (coming soon)"
                    />
                    
            </Grid>

            <Grid item xs={12} sm={6}>
                <ProjectCard
                    title="Point of Sale Front-end - (WIP)"
                    subtitle="React, Material-UI, Javascript, HTML, CSS"
                    //imgSrc='./images/lnkdin.jpg'
                    avatarSrc={headPic}
                    body="A forms based point of sale system that allows users to customize items, add to cart and checkout." 
                    clickLabel="Learn More (coming soon)"

                    />
                    
            </Grid>
            <Grid item xs={12} sm={6}>
                <ProjectCard
                    title="Kegerator Project"
                    subtitle="Javascript, HTML, CSS, Flask Python, SQLAlchemy, Postgresql, Data Viz Chart.js"
                    //imgSrc='./images/lnkdin.jpg'
                    avatarSrc={headPic}
                    body="An application that utilizes a single board computer to collect temp/humidity/fluid flow data. The data is stored in a Postgresql database. Front-end interface that allows end user to analyze usage via tabular reports and dynamic charts." 
                    clickLabel="Learn More (coming soon)"

                    />
                    
            </Grid>
            <Grid item xs={12} sm={6}>
                <ProjectCard
                    title=" Mailroom Chain of Custody App"
                    subtitle="VBA, MS Access, SQL"
                    //imgSrc='./images/lnkdin.jpg'
                    avatarSrc={headPic}
                    body="An application built using MS Access split database. Many custom forms for user interface. Relational database with custom SQL queries. In use in multiple mailrooms for years. Mail room attendants can receive packages, add new employees, add new shippers, generate email notifications, provide traceability and confirmation of status of all packages. Tens of thousands of packages have passed through this application in a corporate environment." 
                    clickLabel="Learn More (coming soon)"

                    />
                    
            </Grid>

        </Grid>
        
    );
}

export default Content;