import React from 'react';
import './footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Footer Heading 1</h3>
            <p>Some text goes here.</p>
          </div>
          <div className="col-md-4">
            <h3>Footer Heading 2</h3>
            <p>Some text goes here.</p>
          </div>
          <div className="col-md-4">
            <h3>Footer Heading 3</h3>
            <p>Some text goes here.</p>
          </div>
        </div>
      </div>
      <div className="copy">
        &copy; 2023 Vishal Gupta. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
