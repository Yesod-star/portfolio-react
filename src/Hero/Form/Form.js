import React, { useState } from "react";

import './Form.css';

function EmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [isSubmitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mleqjdyq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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

        {isSubmitted ? (
          <button className="button" disabled type="submit">SENT.</button>
        ) : (
          <button className="button" type="submit">SUBMIT</button>
        )}
      </form>
    </div>
  );
}

export default EmailForm;
