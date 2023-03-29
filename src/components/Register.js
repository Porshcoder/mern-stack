import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router'



const Register = () => {

    const history = useNavigate()

const [user, setUser] = useState({
    username : "",
    email : "",
    password : ""
});
// handle inputs
const handleInput = (event) =>{
let name = event.target.name;
let value = event.target.value;

setUser({...user, [name]:value});
}

// handle submit
const handleSubmit = async (event)=>{
event.preventDefault();

//object destructuring
//store object data into variables

const {username, email,password} = user;
try {
    //it is submitted on port 3001 by default which is front end but we need to submit it to the backend which is on port 5000.so we need proxy
    const res = await fetch('/register',{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            username,email,password
        })
    })
    console.log(res.status)
    if(res.status === 400 || !res){
        window.alert("Already Used Details")
    }else{
        //you ought to restart the server for proxy to work
        window.alert("Registered Successfully");
        history.push('/login')
    }
} catch (error) {
   console.log(error) 
}
}


  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
            <h1 className="display-4 fw-bolder">Hello, Friend</h1>
            <p className="lead text-center">Enter Your Details To Register</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">REGISTER</h1>
            <form onSubmit={handleSubmit} method='POST'>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Username:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name = "username"
                  value={user.username}
                  onChange = {handleInput}

                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name = "email"
                  value={user.email}
                  onChange = {handleInput}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name = "password"
                  value={user.password}
                  onChange = {handleInput}
                />
              </div>
              {/* <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div> */}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  I Agree Terms and Conditions
                </label>
              </div>
              <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
