
import React from 'react'
import PropTypes from 'prop-types';


const Profile = (props) => {
  const handleClick = () => {props.handleName(props.fullname)}
  return (

    <div style={{backgroundColor:'yellow',textAlign:'center',marginLeft:33,marginRight:40}}>
        <h1>{props.fullname}</h1><br></br>
       <h2>{props.bio}</h2> <br></br>
           <h3> {props.profission}</h3><br></br>
       <h2>{props.children}</h2><br></br>
        <button onClick={handleClick}> Click Me </button>
        </div>
    
  );
}

Profile.defaultProps={
  fullname:"Foulen Ben Foulen",
  bio:"here is my bio",
  profession:"here is my profession",
  children:"here is my img",
}

Profile.propTypes={
  fullname:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string,
  children:PropTypes.element,
  handleName:PropTypes.func 
  }
export default Profile