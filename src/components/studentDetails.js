// import { useTable } from "react-table";
import { Table } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/StudentDetails.css';
import { useState } from "react";
import ViewDetailsPopup from './viedetailpopup';
import './css/viewdetailspopup.css';
import EditDetailsPopup from "./EditDetailspop";
import DeletePopup from "./DeletePopup";


const Details =()=>{
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const [isopen,setisopen] = useState(false);
  const toggle=()=>{
    setisopen(!isopen);
  }

  const [isopened,setopened] = useState(false);
  const togpopup=()=>{
    setopened(!isopened);
  }
 
  return(

    <div className="backgr">
      
    <h1 className='hd'> Student List</h1>
    {isOpen && <ViewDetailsPopup
      content={<>
        <b>Student ID : 01</b>
        <pre>
          Name      : Kanchana Jagodage<br></br>
          Age       : 25<br></br>
          Year      : 4th<br></br>
          DOB       : 1996.02.27<br></br>
          Address   : Badulla,Sri Lanka<br></br>
          Degree    : Computer Science and Technology

        </pre>
        
      </>}
      handleClose={togglePopup}
    />}
     <div>
     {isopen && <EditDetailsPopup
      content={<>
       <div className="topic">
        <b>Add Student</b>
        </div>
        <div className='con'>
        <form className='addStudent'>
          
          <label for="fname">First Name</label>
          <input type="text" className="in" id="fname" name="firstname" value={"Kanchana"}></input>
          
          <label for="lname">Last Name</label>
          <input type="text" className="in" id="lname" name="lastname" value={"Jagodage"}></input>
          
          <label for="email">Email</label>
          <input type="text" className="in" id="email" name="email" value={"kanchana@gmail.com"} ></input>
          
          <label for="year">Year</label>
          <input type="text" className="in" id="year" name="year" value={"4th"}></input>
        
          <input className="sub" type="submit" value="Submit"></input>
          </form>
        </div> 
      </>}
      handleClose={toggle}
    />}
  </div>
  <div>
    {isopened && <DeletePopup
      content={<>
        <b>Delete record</b>
        <p>Are you sure you want to delete this record?</p>
        <button variant="primary" size="lg" className='yes'>Yes</button>
        <button variant="primary" size="lg" className='no'>No</button>
      </>}
      handleClose={togpopup}
    />}
        </div>
  <Table  className="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Year</th>
      <th colSpan='3'>Update Record</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Kanchana</td>
      <td>Jagodage</td>
      <td>4th</td>
      <td><Button variant="primary" size="lg" className='edit' onClick={toggle}>Edit</Button></td>
      <td>
      <Button variant="primary" size="lg" className='view'  onClick={togglePopup}>View</Button></td>

      <td><Button variant="primary" size="lg" className='delete' onClick={togpopup}>Delete</Button></td>
    
       
    </tr>
    <tr>
      <td>2</td>
      <td>Samila</td>
      <td>Jagodage</td>
      <td>4th</td>
      <td><Button variant="primary" size="lg" className='edit'>Edit</Button></td>
      <td><Button variant="primary" size="lg" className='view'>View</Button></td>
      <td><Button variant="primary" size="lg" className='delete'>Delete</Button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Yasara</td>
      <td>Fernando</td>
      <td>4th</td>
      <td><Button variant="primary" size="lg" className='edit'>Edit</Button></td>
      <td><Button variant="primary" size="lg" className='view'>View</Button></td>
      <td><Button variant="primary" size="lg" className='delete'>Delete</Button></td>
    </tr>
    <tr>
      <td>4</td>
      <td>Kalani</td>
      <td>Udara</td>
      <td>4th</td>
      <td><Button variant="primary" size="lg" className='edit'>Edit</Button></td>
      <td><Button variant="primary" size="lg" className='view'>View</Button></td>
      <td><Button variant="primary" size="lg" className='delete'>Delete</Button></td>
    </tr>
    <tr>
      <td>5</td>
      <td>Kamal</td>
      <td>Jayasinghe</td>
      <td>2nd</td>
      <td><Button variant="primary" size="lg" className='edit'>Edit</Button></td>
      <td><Button variant="primary" size="lg" className='view'>View</Button></td>
      <td><Button variant="primary" size="lg" className='delete'>Delete</Button></td>
    </tr>
    <tr>
      <td>6</td>
      <td>Nimali</td>
      <td>Wathsala</td>
      <td>3rd</td>
      <td><Button variant="primary" size="lg" className='edit'>Edit</Button></td>
      <td><Button variant="primary" size="lg" className='view'>View</Button></td>
      <td><Button variant="primary" size="lg" className='delete'>Delete</Button></td>
    </tr>
    <tr>
      <td>7</td>
      <td>Kalani</td>
      <td>Udara</td>
      <td>4th</td>
      <td><Button variant="primary" size="lg" className='edit'>Edit</Button></td>
      <td><Button variant="primary" size="lg" className='view'>View</Button></td>
      <td><Button variant="primary" size="lg"variant="primary" size="lg" className='delete'>Delete</Button></td>
    </tr>
    <tr>
      <td>8</td>
      <td>Kalani</td>
      <td>Udara</td>
      <td>4th</td>
      <td><Button variant="primary" size="lg" className='edit'>Edit</Button></td>
      <td><Button variant="primary" size="lg" className='view'>View</Button></td>
      <td><Button variant="primary" size="lg" className='delete'>Delete</Button></td>
    </tr>
    <tr>
      <td>9</td>
      <td>Kalani</td>
      <td>Udara</td>
      <td>4th</td>
      <td><Button variant="primary" size="lg" className='edit'>Edit</Button></td>
      <td><Button variant="primary" size="lg" className='view'>View</Button></td>
      <td><Button variant="primary" size="lg" className='delete'>Delete</Button></td>
    </tr>
    <tr>
      <td>10</td>
      <td>Kalani</td>
      <td>Udara</td>
      <td>4th</td>
      <td><Button variant="primary" size="lg" className='edit'>Edit</Button></td>
      <td><Button variant="primary" size="lg" className='view'>View</Button></td>
      <td><Button variant="primary" size="lg" className='delete'>Delete</Button></td>
    </tr>
  </tbody>
</Table>
    </div>
        
    );
}

export default Details;