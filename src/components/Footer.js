import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-white bg-primary">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-3">
                <h4>FINE ART</h4>
              </div>

              <div className="col-2">
                <h5>Company</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-2">
                <h5>About Us</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-4 offset-1">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of whats new and exciting from us.</p>
                  <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Enter Email...."
                    />
                    <button type="button" className="rounded-pill btn btn-secondary">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex justify-content-between pt-4 mt-4 border-top">
              <p>&copy; 2023 Porscoder, Inc. All rights reserved.</p>
              <ul className="listed-unstyled d-flex social">
                <li className="ms-3">
                  <a className="link-light" to="#">
                    <i className="fa fa-facebook fa-2x social"></i>
                  </a>
                </li>

                <li className="ms-3">
                  <a className="link-light" to="#">
                    <i className="fa fa-instagram fa-2x social"></i>
                  </a>
                </li>

                <li className="ms-3">
                  <a className="link-light" to="#">
                    <i className="fa fa-twitter fa-2x social"></i>
                  </a>
                </li>

                <li className="ms-3">
                  <a className="link-light" to="#">
                    <i className="fa fa-pinterest fa-2x social"></i>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
