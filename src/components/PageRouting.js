import React, { Component } from 'react'
import Content from './Content'
import LandingPage from './LandingPage'
import ContactTable from './ContactTable'
import ContactMe from './ContactMe'


export default class PageRouting extends Component {
    state = {
        pageSelection: "HOME"
    }
   /* componentDidUpdate(){
      //  this.setState({pageSelection:this.props.selectedPage})
      const {selectedPage} = this.props
      console.log("component state updatede",selectedPage)
      //this.setState({pageSelection:"PIZZA"})
    }*/

    render() {

        const goToPage = this.props.selectedPage

        switch(goToPage){

        case "HOME":
            return (
                <div>
                    <LandingPage/>
                </div>
            )
        case "PROJECTS":
            return(
                <div>
                    <Content/>
                </div>
            )
        case "RESUME":
            return(
                <div>
                    this is RESUME
                </div>
            )
        case "PIZZA":
            return(
                <div>
                    this is PIZZA
                </div>
            )
        case "CONTACT":
            return(
                <div>
                  
                    <ContactMe/>
                </div>
            )
        };
    }
}
