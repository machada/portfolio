
import React from "react";
import Button from '@material-ui/core/Button';
import emailpic from '../images/emailpic.png';

const Pizza = () =>{

return(
    <div>
        <Button className = "email_btn" href="mailto:allan.machado2011@gmail.com">
          <img src={emailpic}/>
        </Button>
    </div>
)
};
export default Pizza;