import React from 'react';


const About = () => {
  return (
    <div>
      <section id=''>
        <div className='container '>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='/assets/about1.jpeg' alt='About' className='w-75 mt-5' />
                </div>
                <div className='col-md-6 my-5 py-5'>
                    <h3 className='fs-5 mb-0'>About Us</h3>
                    <h1 className='display-6 mb-2'>Who <b>We</b> Are?</h1>
                    <hr className='w-50'/>
                    <p className='lead mb-4'>Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.</p>
                <button className='btn btn-primary rounded-pill px-4 py-2'>Get Started</button>
                <button className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2'>Contact Us</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default About;
