import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 className="contact-title">Contact Us</h2>
        
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" name="name" className="form-input" />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" className="form-input" />
        </div>
        
        <div className="form-group">
          <label htmlFor="message" className="form-label">Comment:</label>
          <textarea id="message" name="message" className="form-textarea"></textarea>
        </div>
        
        <div className="form-group" style={{ textAlign: 'center' }}>
          <button className="submit-button">Submit your comment</button>
        </div>
        
        <p className="footer-text">FEEL FREE TO ORDER......!!</p>
      </div>
    </div>
  );
};

export default ContactPage;
