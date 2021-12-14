import Button from "@restart/ui/esm/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import './css/header.css';
import Popup from './AddStudentPop';


const Hd = ()=>{
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }   

return(
    <div className='head'>
        <h1>Admin Panel</h1>
        <Button  variant="primary" size="lg" className='add' onClick={togglePopup}>Add Student</Button>
        
    {isOpen && <Popup
      content={<>
        <div className="topic">
        <b>Add Student</b>
        </div>
        <div className='con'>
        <form className='addStudent'>
          
          <label for="fname">First Name</label>
          <input type="text" className="in" id="fname" name="firstname" placeholder="Your name.."></input>
          
          <label for="lname">Last Name</label>
          <input type="text" className="in" id="lname" name="lastname" placeholder="Your last name.."></input>
          
          <label for="email">Email</label>
          <input type="text" className="in" id="email" name="email" placeholder="Your email here.."></input>
          
          <label for="year">Year</label>
          <input type="text" className="in" id="year" name="year" placeholder="Your year here..."></input>
        
          <input className="sub" type="submit" value="Submit"></input>
          </form>
        </div>
      </>}
      handleClose={togglePopup}
    />}
       
    </div>
 );
}

export default Hd;