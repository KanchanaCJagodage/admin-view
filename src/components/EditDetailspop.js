
const  EditDetailsPopup = (props1) => {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props1.handleClose}>x</span>
          {props1.content}
        </div>
      </div>
    );
  };
  
  export default EditDetailsPopup;