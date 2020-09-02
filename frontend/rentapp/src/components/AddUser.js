import React, {useState } from 'react';
import AddUserForm from './AddUserForm';
import './AddUser.css';
import { withRouter } from "react-router-dom";
import axios from 'axios';

const baseUrl="http://localhost:3001/users";

function AddUser (props) {
  const [state , setState] = useState({
    user_ID: "",
    user_name:" ",
    name: " ",
    surname: " ",
    user_type:"",
    phone: "",
    date_of_birth: Date,
    created_at: "",
    update_at: "",
    email : "",
    password : "",
    confirmPassword: "",
    successMessage: null
})

const handleChange= async(event)=>{
   await setState({
     ...state,
      [event.target.name]: event.target.value
  });
}

const handleSubmitClick = (event) => {
  event.preventDefault();
  if(state.password === state.confirmPassword) {
     sendDetailsToServer()    
  } else {
      props.showError('Passwords do not match');
  }
}


const sendDetailsToServer= async()=>{
    if (state.user_name.length &&
        state.name.length &&
        state.surname.length &&
        state.email.length &&
        state.password.length &&
        state.phone.length &&
        state.date_of_birth.length){
            props.showError(null)
            const payload={
                user_ID: 2,
                user_name:state.user_name,
                name: state.name,
                surname: state.surname,
                user_type:"",
                phone: state.phone,
                date_of_birth:   state.date_of_birth,
                created_at: "",
                update_at: "",
                email :  state.email,
                  password : state.password,
            }

   await axios.post( baseUrl, payload )
   
            .then((response)=>{
                if (response.status===200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Registration successful. Redirecting to home page..'
                      
                    }))
                    props.showError(null)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        } else {
            props.showError('Please enter valid username and password')    
           
        }

       

       
}


const redirectToLogin = () => {
    props.history.push('/users'); 
    props.updateTitle('Users');
 }



    return (
    
      <div className="card col-12 col-lg-4 t-2 hv-center justify-content-center align-items-center container ">
         <div className="containerAddUsersSecundario">
        <form>
         <div className="form-group text-left">
          <label htmlFor="exampleImputUser">User Name:</label>
            <input 
            type="text"
            className="form-control"
            name="user_name"
            onChange={handleChange}
             />
          </div>
          <div className="form-group text-left">
          <label htmlFor="exampleImputName">Name:</label>
            <input 
            type="text"
            className="form-control"
            name="name"
            onChange={handleChange}
             />
          </div>
          <div className="form-group text-left">
          <label htmlFor="exampleImputSurname">Surname:</label>
            <input type="text"
            className="form-control"
            name="surname"
            onChange={handleChange}
             />
          </div>
          <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address:</label>
         <input type="email" 
         className="form-control" 
          name="email" 
         aria-describedby="emailHelp" 
         placeholder="Enter email" 
         onChange={handleChange}
                    />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

          <div className="form-group text-left">
              <label htmlFor="exampleInputPassword1">Password:</label>
              <input type="password" 
                  className="form-control" 
                  name="password" 
                  placeholder="Password"
                  onChange={handleChange} 
              />
          </div>
          <div className="form-group text-left">
              <label htmlFor="exampleInputPassword1">Confirm Password:</label>
              <input type="password" 
                  className="form-control" 
                  name="confirmPassword" 
                  placeholder="Confirm Password"
                  onChange={handleChange} 
              />
          </div>

          <div className="form-group text-left">
          <label htmlFor="exampleImputName">ver user_type:</label>
        
          </div>

          <div className="form-group text-left">
          <label htmlFor="exampleImputPhone">Phone:</label>
            <input type="text"
            className="form-control"
            name="phone"
            onChange={handleChange}
             />
          </div>

          <div className="form-group text-left">
          <label htmlFor="exampleImputDate">Date:</label>
            <input type="Date"
            className="form-control"
            name="date_of_birth"
            onChange={handleChange}
             />
          </div>

          <div className="form-group text-left">
          <label htmlFor="exampleImputName">create_att ver:</label>
         
          </div>
          
          <div className="form-group text-left">
          <label htmlFor="exampleImputName">update_at ver:</label>
        
          </div>
          
          <button 
              type="submit" 
              className="btn btn-primary"
              onClick={handleSubmitClick}
          >
              Register
          </button>
          </form>
   
      <div className="mt-2">
          <span>Already have an account? </span>
          <span className="loginText" onClick={redirectToLogin} >Login here</span> 
      </div>
      
     </div>
  </div>

    
      )
  }


  export default withRouter(AddUser);
