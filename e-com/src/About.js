// AboutPage.js
import React from 'react';
import "./About.css";

const About = () => {
    
  return (
    <div className="about-container">
      <h2>About Us</h2>

      <div className="about-content">
        <p>
          Welcome to our company! We are dedicated to providing [brief description of your company/organization].
        </p>

        <div>
          <h3>Contact Information</h3>
          <p>
            <strong>Company Name:</strong> Your Company Name<br />
            <strong>Address:</strong> 123 Main Street, Cityville, State, Country<br />
            <strong>Contact Email:</strong> info@example.com<br />
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
        </div>

        <div>
          <h3>Copyright</h3>
          <p>
            &copy; 2024 Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
