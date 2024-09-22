/*
File Name: About.js
Student's Name: Mohammed Sadiq Ahamed Kadar
Student ID: 301 430 160
Date: 09-17-2024
*/

// Importing needed libraries //
import React from 'react';

// Main //
const About = () => {
    return(
        <div className="container">
            <h1>About Me</h1>
            <p>Hello, my name is Mohammed Sadiq Ahamed Kadar. I am a student learning how to develop web applications.<br></br>In addition to my passion for coding, I enjoy playing sports, which helps me stay active and energized.</p>
            <a href="/resume.pdf" target="_blank">Download my Resume</a>
            <img src="/myself.jpeg" alt="My Photo" style={{width: '500px', height: 'auto'}} />
        </div>
    );
};

export default About;