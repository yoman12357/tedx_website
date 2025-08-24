import React from 'react';
import instagramLogo from '../images/instagram_logo.png';
import linkedInLogo from '../images/linkedIn_logo.png';
import '../mainstyles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>TEDxNITKSurathkal</h3>
        <p>Followed by the vision of serving the student community with the most innovative and inspiring ideas.</p>
      </div>
      <div className="footer-icons">
        <a href="https://www.instagram.com/tedxnitksurathkal/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src={instagramLogo} alt="Instagram" className="social-icon" />
        </a>
  
        <a href="https://www.linkedin.com/company/tedxnitk/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src={linkedInLogo} alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    
      <p className="copyright">
        © 2025 All Rights Reserved | Made With ❤️ by TEDxNITKSurathkal ©
      </p>
    </footer>
  );
};

export default Footer;
