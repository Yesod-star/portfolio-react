import React, { useState } from "react";

import './Form.css';

function EmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Form">
      <h2>Send me a message.</h2>
      <form onSubmit={handleSubmit}>

        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Type your best e-mail ..."
          required
        /><br /><br />

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message ..."
          rows="4"
          required
        ></textarea><br /><br />

        <button className="button" type="submit">SUBMIT</button>
      </form>
    </div>
  );
}


  
export default EmailForm;

// fetch('/your-server-endpoint', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(formData),
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Email sent:', data);
//   })
//   .catch(error => {
//     console.error('Error sending email:', error);
//   });

