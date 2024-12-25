import React from 'react';

const Footer = () => {
  return (
    <div style={{ 
      backgroundColor: '#333', 
      color: '#fff', 
      padding: '20px', 
      textAlign: 'center' 
    }}>
      <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      <div style={{ marginTop: '10px' }}>
        <a href="/about" style={{ color: '#fff', margin: '0 10px' }}>About</a>
        <a href="/contact" style={{ color: '#fff', margin: '0 10px' }}>Contact</a>
        <a href="/privacy" style={{ color: '#fff', margin: '0 10px' }}>Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;