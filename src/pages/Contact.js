/*
File Name: Contact.js
Student's Name: Mohammed Sadiq Ahamed Kadar
Student ID: 301 430 160
Date: 09-17-2024
*/

// Importing needed libraries //
import React, {useState} from 'react';

// Main //
const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: ' ',
        lastName: ' ',
        email: ' ',
        message: ' '
    });

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value});
};

const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    window.location.href = "/";
};

return (
<div className="container">
<h1>Contact Me</h1>
<form onSubmit={handleSubmit}>
    <input type="text" name="firstName" placeholder="First Name" onCharge={handleChange} required />
    <input type="text" name="lastName" placeholder="Last Name" onCharge={handleChange} required />
    <input type="email" name="email" placeholder="Email" onCharge={handleChange} required />
    <textarea name="message" placeholder="Enter Your Message" onCharge={handleChange} required></textarea>
    <button type="submit">Submit</button>
</form>
</div>
);
};

export default Contact;