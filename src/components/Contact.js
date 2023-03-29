import React, {useState} from "react";


const Contact = () => {

  

  const [msg, setMsg] = useState({
      name : "",
      email : "",
      message : ""
  });

  // handle inputs
const handleChange = (event) =>{
  let name = event.target.name;
  let value = event.target.value;
  
  setMsg({...msg, [name]:value});
  }

// handle submit
const handleSubmit = async (event)=>{
  event.preventDefault();
  
  //object destructuring
  //store object data into variables
  
  const {name, email,message} = msg;
  try {
      //it is submitted on port 3001 by default which is front end but we need to submit it to the backend which is on port 5000.so we need proxy
      const res = await fetch('/message',{
          method : "POST",
          headers : {
              "Content-Type" : "application/json"
          },
          body : JSON.stringify({
              name,email,message
          })
      })
      console.log(res.status)
      if(res.status === 400 || !res){
          window.alert("Message Not Sent. Try Again Later")
      }else{
          //you ought to restart the server for proxy to work
          window.alert("Message Sent. ");
         setMsg({
          name : "",
          email : "",
          message : ""
         }) 

      }
  } catch (error) {
     console.log(error) 
  }
  }
  


  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b>Question?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <img src="/assets/contact2.jpeg" alt="Contact" className="w-75" />
            </div>

            <div className="col-md-6">
              <form onSubmit={handleSubmit} method ="POST">
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                    name="name"
                    value={msg.name}
                    onChange = {handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="" className="form-label">
                    Email address:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={msg.email}
                    onChange = {handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="message"
                    className="form-label"
                  >
                    Your Message:
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    name="message"
                    value={msg.message}
                    onChange = {handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary rounded-pill px-4">Send Message <i className="fa fa-paper-plane ms-2 "></i></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
