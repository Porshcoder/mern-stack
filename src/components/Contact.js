import React from "react";

const Contact = () => {
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
              <form action="">
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Your Name"
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
